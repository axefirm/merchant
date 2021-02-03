import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogType } from 'src/app/core/model/const';
import { MgCmerchGetMerchVerifyReq, MgCmerchGetMerchVerifyRes } from 'src/app/core/model/payment/getMerchVerify';
import { DialogComponent } from '../../fragments/dialog/dialog.component';
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'app-settings-verify',
  templateUrl: './settings-verify.component.html',
  styleUrls: ['./settings-verify.component.scss']
})
export class SettingsVerifyComponent implements OnInit {
  merchCode: string;
  verifstatus: MgCmerchGetMerchVerifyRes;
  verifType: string;

  constructor(public dialog: MatDialog,private api: ApiService,) { }
  
  ngOnInit(): void {
    this.merchCode = sessionStorage.getItem('merchant');
    this.verify();
  }

  verify() {
   
    const req = new MgCmerchGetMerchVerifyReq(this.merchCode);
    console.log(req);
    this.api.getMerchVerify(req).subscribe(data => {
      this.verifstatus= data;
       this.verifType = this.verifstatus.verfType;
      console.log(this.verifType);
 
 
    });
  }

  openDialog() {
    let  dialogRef = this.dialog.open(DialogComponent, {data: {type: DialogType.location , title: "Add location" }},
      );

  }
}
