import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogType } from 'src/app/core/model/const';
import { MgCmerchDeleteMerchCustReq } from 'src/app/core/model/payment/deleteMerchCust';
import { MgCmerchSelectMerchCustReq } from 'src/app/core/model/payment/selectMerchCus';
import { ApiService } from 'src/app/core/services/api.service';
import { DialogComponent } from '../../fragments/dialog/dialog.component';
export interface adminRole {

}
@Component({
  selector: 'app-settings-admin',
  templateUrl: './settings-admin.component.html',
  styleUrls: ['./settings-admin.component.scss']
})


export class SettingsAdminComponent implements OnInit {
  merchCode: string;
  roles: any;
  users: any;
  role: number;
  isHide:boolean;

  constructor(public dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.merchCode = sessionStorage.getItem('merchant');

    this.getUsersInfo();
    this.getDictionary();
    this.isHide = true;
  }
  getUsersInfo() {
    const req = new MgCmerchSelectMerchCustReq(this.merchCode);
    this.api.selectMerchCust(req).subscribe(data => {
      if (data.responseCode == 0) {
        this.users = data.custs;
        console.log(this.users);
      }
      console.log(data);
    });

  }

  getDictionary() {
    this.api.getDictionary('dicPayeeCustRole').subscribe((data) => {
      if (data.responseCode == 0) {
        this.roles = data.responseData;
        console.log(this.roles);
      }

    });
  }
  openDialog(role) {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: {
        type: DialogType.addUser, title: "Add user",
        roleId: role
      }
    });
    console.log(this.roles[3]);
  }
  removeUser(value) {
    const req = new MgCmerchDeleteMerchCustReq(this.merchCode , value);
    console.log(req);
    this.api.deleteMerchCust(req).subscribe(data => {
      console.log(data);
    })
  }

  editUserTypes() {
    this.isHide = !this.isHide;
    console.log(this.isHide);
  }
}
