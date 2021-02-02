import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MgGetDicRes, MgLoginDicData } from 'src/app/core/model/app/getDictionary';
import { MgCmerchGetMerchRegReq, MgCmerchGetMerchRegRes } from 'src/app/core/model/payment/getMerchReg';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { MgCmerchGetMerchVerifyReq } from 'src/app/core/model/payment/getMerchVerify';
@Component({
  selector: 'app-settings-general',
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss']
})


export class SettingsGeneralComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService,private router: Router) { }


  accountDet: MgCmerchGetMerchRegRes;
  dicOrg: MgLoginDicData;
  dicNotif: MgLoginDicData;
  verfStat: string;
  selected = new FormControl(0);
  merchCode: string;
  compSett: FormGroup;
  toggler: boolean;


  ngOnInit(): void {


    this.merchCode = sessionStorage.getItem('merchant');
    this.compSett = this.formBuilder.group({
      merchName: new FormControl('', [Validators.required]),
      registerCode: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      isChecked: new FormControl(this.toggler, [Validators.required]),
      orgTypeId: new FormControl(this.accountDet?.orgTypeId, [Validators.required]),
    });


    this.Init();

  }

  getDictionary() {
    this.api.getDictionary("dicPayeeOrgType").subscribe(data => {
      if (data.responseCode == 0) {
        this.dicOrg = data.responseData;
        // this.compSett.get('orgTypeId').setValue(this.accountDet?.orgTypeId);
        console.log(this.dicOrg);
        // var selected = this.dicOrg.id   ;
        // console.log(selected);
      }
      console.log(data);

    });
    this.api.getDictionary("dicPayeeNotifType").subscribe(data1 => {
      if (data1.responseCode == 0) {
        this.dicNotif = data1.responseData;
        console.log(this.dicNotif);
      }

    })


  }
  GetUserInfo() {

    const req = new MgCmerchGetMerchRegReq(this.merchCode);
    this.api.getMerchReg(req).subscribe(data => {
      if (data.responseCode != 0) {
      }
      if (data.responseCode == 0) {

        this.accountDet = data;
        console.log(this.accountDet);
        this.verfStat = this.accountDet.verfStatus;
        console.log(this.verfStat);
        if (this.accountDet.isVatPayer == 1) {
          this.toggler = true;
        }
        else {
          this.toggler = false;
        }
        console.log(this.toggler);
      }

    });
    this.getDictionary();
  }

  doSomething(value) {
    console.log(this.compSett.value.orgTypeId);
  }
  verify() {
    this.router.navigate(['/settings/verify']);
  }



  Init() {
    this.GetUserInfo();

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
