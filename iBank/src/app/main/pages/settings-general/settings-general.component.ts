import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MgCmerchGetMerchRegRes } from 'src/app/core/model/payment/getMerchReg';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-settings-general',
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss']
})
export class SettingsGeneralComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private api: ApiService,) { }

  main: FormGroup;
  accountDet: MgCmerchGetMerchRegRes[];
  accountRes: MgCmerchGetMerchRegRes;


  ngOnInit(): void {
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.Init();
    this.getDictionary();


  
  }

  getDictionary() {
    this.api.getDictionary("dictMerchTxnStatus").subscribe(data => {
      console.log(data);

    })
  }
  

  // checkRes() {
  //   switch (this.loginRes.responseCode) {
  //     case 0:
  //       // console.log(this.loginRes);
  //       // if (this.loginRes.credStatus == eCredStatus.new) {
  //       //   this.page = 1;
  //       // } else if (this.loginRes.credStatus == eCredStatus.expired) {
  //       //   this.page = 1;
  //       // } else if (this.loginRes.isDuplicated == 1) {
  //       //   this.page = 2;
  //       // } else {
  //       //   this.updateOnMain(false);
  //       //   this.router.navigate(['register']);
  //       // }
  //       const req = new MgCmerchSelectMerchCustReq("");
  //       console.log("selectMerchCust");
  //       this.api.selectMerchCust(req).subscribe(data => {
  //         console.log(data);
  //         this.selectRes = data as MgCmerchGetMerchCustRes;
  //         if (this.selectRes.responseCode == 0) {

  //         } else if (this.selectRes.responseCode == 41607880) {
  //           this.router.navigate(['register', { status: 'enroll' }]);
  //         }
  //       })
  //   }
  // }

  Init() {
    let info = new MgCmerchGetMerchRegRes(
      "merchCode",
      "merchName",
      "custCode",
      "custName",
      0,
      0,
      "orgTypeName",
      "registerCode",
      "address",
      0,
      "msisdn",
      "phone",
      "email",
      "notifType",
      "verfStatus",
      "verfStatusName",
      0,
      "responseDesc");
      this.accountDet = [info];
      console.log(this.accountDet);
    }
    
    
    


}
