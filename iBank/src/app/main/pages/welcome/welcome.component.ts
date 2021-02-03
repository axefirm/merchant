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
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/core/services/shared.service';
import { MgCmerchMerchCust, MgCmerchSelectMerchCustReq, MgCmerchSelectMerchCustRes } from 'src/app/core/model/payment/selectMerchCus';
import { MgCmerchGetMerchCustRes } from 'src/app/core/model/payment/getMerchCust';
import { DialogType, eCredStatus } from 'src/app/core/model/const';
import { DialogComponent } from '../../fragments/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  constructor(private formBuilder: FormBuilder, private api: ApiService, protected http: HttpClient,
    private encr: EncrService, private translate: TranslateService,
    private router: Router, private service: SharedService, public dialog: MatDialog,
    private route: ActivatedRoute,) { }

  //Carousal related
  indicator = 0;
  carouselInterval;
  maxIndex = 3;

  page = 0;

  main: FormGroup;
  loginRes: MgLoginRes;

  test = false;

  selectRes: MgCmerchMerchCust[];
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

    console.log(this.route.snapshot.paramMap.get("msg"));
    if (this.route.snapshot.paramMap.get("msg") != null) {
      alert(this.route.snapshot.paramMap.get("msg"));
    }
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      decrypt: new FormControl(''),
    });
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
      const loginData = new MgLoginReq(this.main.value.useramount, encrypted, "test", "MNGC-MPS92", "172.16.116.92"
        , "6EB20E499328", "IOS", "Name = Chrome,Type = Chrome87,Version = 87.0,Major", "Name = Chrome,Type = Chrome87,Version = 87.0,Major", 60, "MN", 0, 0, "", "2021010817121800", 0, 0, 0, "");
      console.log(loginData);
      this.api.login(loginData).subscribe(data => {
        console.log(data);
        this.loginRes = data as MgLoginRes;
        this.checkRes();
      })
    })
  }

  decrypt() {
    var decrypted;
    console.log('decrypt');
    this.http.get("assets/cert/public.pem", { responseType: 'text' }).subscribe(data => {
      var encrypt = new JSEncrypt();
      encrypt.setPrivateKey(data);
      console.log(this.main.value.decrypt);
      decrypted = encrypt.decrypt(this.main.value.decrypt);
      console.log(decrypted);
    })
  }


  forget() {
    this.router.navigate(['forget-pin']);
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
        if (this.loginRes.isDuplicated == 1) {
          this.router.navigate(['change-mobile']);
        } else if (this.loginRes.credStatus == eCredStatus.new || this.loginRes.credStatus == eCredStatus.expired) {
          this.router.navigate(['change-pin']);
        } else {
          this.updateOnMain(false);
          const req = new MgCmerchSelectMerchCustReq("");
          this.api.selectMerchCust(req).subscribe(data => {
            if (data.responseCode == 0) {
              this.selectRes = data.custs;
              this.openDialog();
            } else if (data.responseCode == 41607880) {
              this.router.navigate(['register', { status: 'enroll' }]);
            }
          })
        }

    }
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { data: { type: DialogType.chooseMerchant, value: this.selectRes, title: "Choose merchant" } },
    );
  }
  updateOnMain(onMain): void {
    this.service.onMainEvent.emit(onMain);
  }

  ngOnDestroy(): void {
    clearInterval(this.carouselInterval);
  }
}
