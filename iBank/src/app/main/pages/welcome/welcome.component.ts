import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, transition, style, animate, state, animation, keyframes } from '@angular/animations'
import { ApiService } from 'src/app/core/services/api.service';
import { HttpClient } from '@angular/common/http';
import { MgLoginReq, MgLoginRes } from 'src/app/core/model/login';
import { MgCmerchCheckUnreadSmartReq } from 'src/app/core/model/enquire/checkUnreadSmart';
import { EncrService } from 'src/app/core/services/enc.service';
import { JSEncrypt } from 'jsencrypt';
import { MgCredForgetReq } from 'src/app/core/model/forgetPin';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/core/services/shared.service';
import { MgCmerchSelectMerchCustReq } from 'src/app/core/model/payment/selectMerchCus';


interface Carousel {
  title: string;
  description: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('myAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', animate('600ms ease-in', keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 1, offset: 1.0 })
      ])))
    ]),
  ]
})
export class WelcomeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private api: ApiService, protected http: HttpClient, private encr: EncrService, private translate: TranslateService, private router: Router, private service: SharedService) { }

  //Carousal related
  indicator = 0;
  carouselInterval;
  maxIndex = 3;

  page = 0;

  main: FormGroup;
  loginRes: MgLoginRes;

  carousels: Carousel[] = [
    {
      title: "iBanking platform1",
      description: "All-In-One solution, bringing a full suite of financial services to your fingertips.",
    },
    {
      title: "iBanking platform2",
      description: "All-In-One solution, bringing a full suite of financial services to your fingertips.",
    },
    {
      title: "iBanking platform3",
      description: "All-In-One solution, bringing a full suite of financial services to your fingertips.",
    }
  ];

  ngOnInit(): void {
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.intervalRequest();
  }

  intervalRequest() {
    clearInterval(this.carouselInterval);
    this.carouselInterval = setInterval(() => {
      this.next(this.indicator + 1);
    }, 6000);
  }

  next(input: number) {
    this.intervalRequest();
    if (input < this.maxIndex) {
      this.indicator = input;
    } else {
      this.indicator = 0;
    }
  }

  login() {
    var encrypted;
    this.http.get("assets/cert/public.pem", { responseType: 'text' }).subscribe(data => {
      var encrypt = new JSEncrypt();
      encrypt.setPublicKey(data);
      encrypted = encrypt.encrypt(this.main.value.password);
      console.log(encrypted);
      const loginData = new MgLoginReq(this.main.value.useramount, encrypted, "51e2f9337d57eea3", "MNGC-MPS92", "172.16.116.92"
        , "6EB20E499328", "IOS", "Name = Chrome,Type = Chrome87,Version = 87.0,Major", "Name = Chrome,Type = Chrome87,Version = 87.0,Major", 60, "MN", 0, 0, "", "2021010817121800", 0, 0, 0, "");
      console.log(loginData);
      this.api.login(loginData).subscribe(data => {
        console.log(data);
      })
    })

    // const req = new MgCmerchCheckUnreadSmartReq("1234");
    // this.api.checkUnreadSmart(req).subscribe(data => {
    //   console.log(data);
    // })
  }
  forget() {
    var req = new MgCredForgetReq();
    req.loginCode = "99077339";
    req.chnlType = "УИ99251234";
    this.api.forgetPin(req).subscribe(data => {
      console.log(data);
        this.loginRes = data as MgLoginRes;
        this.checkRes();
      })

    // const req = new MgCmerchCheckUnreadSmartReq("1234");
    // this.api.checkUnreadSmart(req).subscribe(data => {
    //   console.log(data);
    // })
  }

  changeLang() {
    console.log(this.browserLang);
    this.translate.use('mn');
  }
  browserLang(browserLang: any) {
    throw new Error('Method not implemented.');
  }

  checkRes() {
    switch (this.loginRes.responseCode) {
      case 0:
        // console.log(this.loginRes);
        // if (this.loginRes.credStatus == eCredStatus.new) {
        //   this.page = 1;
        // } else if (this.loginRes.credStatus == eCredStatus.expired) {
        //   this.page = 1;
        // } else if (this.loginRes.isDuplicated == 1) {
        //   this.page = 2;
        // } else {
        //   this.updateOnMain(false);
        //   this.router.navigate(['register']);
        // }
        const req = new MgCmerchSelectMerchCustReq("");
        console.log("selectMerchCust");
        this.api.selectMerchCust(req).subscribe(data => {
          console.log(data);
        })
    }
  }


  updateOnMain(onMain): void {
    this.service.onMainEvent.emit(onMain);
  }

  ngOnDestroy(): void {
    clearInterval(this.carouselInterval);
  }
}
