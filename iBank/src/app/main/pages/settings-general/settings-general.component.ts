import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MgGetDicRes,
  MgLoginDicData,
} from 'src/app/core/model/app/getDictionary';
import {
  MgCmerchGetMerchRegReq,
  MgCmerchGetMerchRegRes,
} from 'src/app/core/model/payment/getMerchReg';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MgCmerchGetMerchVerifyReq } from 'src/app/core/model/payment/getMerchVerify';
import { MgCmerchRegMerchReq } from 'src/app/core/model/Online user registration/regMerch';
import { NumberFormatStyle } from '@angular/common';
import { MgCustDetailCustRes } from 'src/app/core/model/detailCust';
import { MgCustUpdateCustReq } from 'src/app/core/model/updateCustInfo/updateCust';
@Component({
  selector: 'app-settings-general',
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss'],
})
export class SettingsGeneralComponent implements OnInit {
  personalSett: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  accountDet: MgCmerchGetMerchRegRes;
  personalAccountDet: MgCustDetailCustRes;
  dicOrg: MgLoginDicData;
  dicNotif: MgLoginDicData;
  verfStat: string;
  selected = new FormControl(0);
  merchCode: string;
  compSett: FormGroup;
  toggler: boolean;
  togglerValue: Number;
  sub: any;
  tabIndex: Number;

  ngOnInit(): void {
    this.merchCode = sessionStorage.getItem('merchant');

    this.compSett = this.formBuilder.group({
      merchName: new FormControl('', [Validators.required]),
      registerCode: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      isChecked: new FormControl(''),
      orgTypeId: new FormControl(''),
      notifChannel: new FormControl(''),
    });
    this.personalSett = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      mNumber: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      notifChannel: new FormControl(''),

    });


    this.sub = this.route.snapshot.paramMap.get('tabStatus');
    if (this.sub == 'personal') {
      this.tabIndex = 1;
    }

    this.getDictionary();
    this.getPersonalInfo();
    this.Init();

  }

  setTabIndex(index) {
    console.log(index);
    this.tabIndex = index;
  }

  getDictionary() {
    this.api.getDictionary('dicPayeeOrgType').subscribe((data) => {
      if (data.responseCode == 0) {
        this.dicOrg = data.responseData;
      }
      console.log(this.dicOrg);
    });
    this.api.getDictionary('dicPayeeNotifType').subscribe((data1) => {
      if (data1.responseCode == 0) {
        this.dicNotif = data1.responseData;
        console.log(this.dicNotif);
      }
    });
  }



  GetCompanyInfo() {
    const req = new MgCmerchGetMerchRegReq(this.merchCode);
    this.api.getMerchReg(req).subscribe(data => {
      if (data.responseCode != 0) {
      }
      if (data.responseCode == 0) {
        this.accountDet = data;
        this.verfStat = this.accountDet.verfStatus;
        if (this.accountDet.isVatPayer == 1) {
          this.toggler = true;
        } else {
          this.toggler = false;
        }

      }
      console.log(this.accountDet);
      this.setFirstValue();
    });
  }

  getPersonalInfo() {
    this.api.detailCust().subscribe(data => {
      if (data.responseCode == 0) {
        this.personalAccountDet = data;
        console.log(data);
      }
      else {
        alert(data.responseDesc);
      }
    })

  }

  setFirstValue() {
    // company first value
    this.compSett.controls['orgTypeId'].setValue(this.accountDet?.orgTypeId.toString());
    this.compSett.controls['notifChannel'].setValue(this.accountDet?.notifType);
    this.compSett.controls['merchName'].setValue(this.accountDet?.merchName);
    this.compSett.controls['phone'].setValue(this.accountDet?.phone);
    this.compSett.controls['email'].setValue(this.accountDet?.email);
    this.compSett.controls['address'].setValue(this.accountDet?.address);
    this.compSett.controls['registerCode'].setValue(this.accountDet?.registerCode);
    this.compSett.controls['isChecked'].setValue(this.toggler);
    // personal first value

    this.personalSett.controls['notifChannel'].setValue(this.personalAccountDet?.notifType);
    

  }

  saveCompanyInfo() {
    if (this.compSett.value.isChecked) {
      this.compSett.value.isChecked = 1;
    }
    else {
      this.compSett.value.isChecked = 0;
    }
    const companyInfo = new MgCmerchRegMerchReq(this.merchCode, "icon", this.compSett.value.merchName, this.compSett.value.orgTypeId, this.compSett.value.registerCode, this.compSett.value.address, this.compSett.value.phone, this.compSett.value.phone, this.compSett.value.email, this.compSett.value.notifChannel, this.compSett.value.isChecked);
    // ene test hiih companyInfo
    // const companyInfo = new MgCmerchRegMerchReq(this.merchCode,"icon",this.compSett.value.merchName,this.compSett.value.orgTypeId, '123123', 'bzd 13 horoo 119a', '94192219', '99192219' , 'bilguungt2@gmail.com', this.compSett.value.notifChannel ,1 );
    console.log(companyInfo);
    console.log(this.compSett.value.isChecked);
    this.api.regMerch(companyInfo).subscribe(data => {
      console.log(data);
    }
    )

  }

  doSomething(value) {
    console.log(this.compSett.value.orgTypeId);
    console.log(this.compSett.value.notifChannel);
    console.log(this.compSett.value.isChecked);
  }
  verify() {
    this.router.navigate(['/settings/verify']);
  }

  Init() {
    this.GetCompanyInfo();
  }
}
