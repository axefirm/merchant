import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogType } from 'src/app/core/model/const';
import { MgCmerchGetMerchVerifyReq, MgCmerchGetMerchVerifyRes } from 'src/app/core/model/payment/getMerchVerify';
import { DialogComponent } from '../../fragments/dialog/dialog.component';
import { ApiService } from 'src/app/core/services/api.service';
import { MgCmerchGetMerchVerfReq } from 'src/app/core/model/payment/MgCmerchGetMerchVerfReq';


@Component({
  selector: 'app-settings-verify',
  templateUrl: './settings-verify.component.html',
  styleUrls: ['./settings-verify.component.scss']
})
export class SettingsVerifyComponent implements OnInit {
  merchCode: string;
  verifstatus: MgCmerchGetMerchVerifyRes;
  verifType: string;
  savedLocData:any;


  constructor(public dialog: MatDialog, private api: ApiService,) { }

  ngOnInit(): void {
    this.merchCode = sessionStorage.getItem('merchant');
    this.verify();
    this.savedLocData = null;

  }

  verify() {

    const req = new MgCmerchGetMerchVerifyReq(this.merchCode);
    console.log(req);
    this.api.getMerchVerify(req).subscribe(data => {
      this.verifstatus = data;
      console.log(this.verifstatus);
      this.verifType = this.verifstatus.verfType;
      console.log(this.verifType);


    });
  }



  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { data: { type: DialogType.location, title: "Add location" } },
    );

    dialogRef.afterClosed().subscribe((result) => {
     this.savedLocData = result as MgCmerchGetMerchVerfReq;
      console.log(this.savedLocData);
    });


  }
}
