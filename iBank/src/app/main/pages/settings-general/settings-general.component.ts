import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MgCmerchRegMerchReq } from 'src/app/core/model/Online user registration/regMerch';
import { MgCmerchGetMerchRegReq, MgCmerchGetMerchRegRes } from 'src/app/core/model/payment/getMerchReg';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-settings-general',
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss']
})


export class SettingsGeneralComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService,) { }



  accountDet: MgCmerchGetMerchRegRes;

  verfStat: string;
  selected = new FormControl(0);
  merchCode: string;


  compSett: FormGroup;

  // compSett = new FormGroup({
  //   merchName: new FormControl(''),
  //   registerCode: new FormControl(''),
  //   address: new FormControl(''),
  //   phone: new FormControl(''),
  //   email: new FormControl(''),
  // });


  ngOnInit(): void {


    this.merchCode = sessionStorage.getItem('merchant');
    this.compSett = this.formBuilder.group({
      merchName: new FormControl('', [Validators.required]),
      registerCode: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      isChecked: new FormControl(false, [Validators.required]),
    });


    this.Init();
    this.getDictionary();
    this.GetUserInfo();

  }

  getDictionary() {
    this.api.getDictionary("dictMerchTxnStatus").subscribe(data => {
      // console.log(data);

    });


  }
  GetUserInfo() {
    const merchCode = sessionStorage.getItem('merchant');
    const req = new MgCmerchGetMerchRegReq(merchCode);
    this.api.getMerchReg(req).subscribe(data => {
      if (data.responseCode != 0) {

      }
      if (data.responseCode == 0) {

        this.accountDet = data;
        console.log(this.accountDet);
        this.verfStat = this.accountDet.verfStatus;
        console.log(this.verfStat);
      }

    });
  }

  saveData() {


    // TODO: Use EventEmitter with form value


    // if (!this.isChecked) {
    //   this..isVatPayer = 0;
    // }
    // else { this..isVatPayer = 1; }

    // let req1 = new MgCmerchRegMerchReq();
    // req1.merchCode = this.merchCode;
    // req1.email = this.accountDet.email;
    // // this.merchCode, "", a.merchName, a.orgTypeId, a.registerCode, a.address, a.msisdn, a.phone, a.email, a.notifType, a.isVatPayer

    // this.api.regMerch(req1).subscribe(dataRes => {
    //   if (dataRes.responseCode == 0) {
    //     console.log(dataRes);

    //   }
    // });

  }


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

  }





}
