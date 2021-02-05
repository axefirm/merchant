import { Component, HostListener, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogType } from 'src/app/core/model/const';
import { MgCustDeleteCustAccessReq } from 'src/app/core/model/updateCustInfo/deleteCustAccess';
import { MgCustAccess, MgCustSelectCustAccessReq, MgCustSelectCustAccessRes } from 'src/app/core/model/updateCustInfo/selectCustAccess';
import { ApiService } from 'src/app/core/services/api.service';
import { DialogComponent } from '../../fragments/dialog/dialog.component';




@Component({
  selector: 'app-settings-security',
  templateUrl: './settings-security.component.html',
  styleUrls: ['./settings-security.component.scss']
})
export class SettingsSecurityComponent implements OnInit {

  pageNumer: number;
  pageCount: number;
  devices: MgCustAccess[];
  deviceNames: Array<MgCustAccess> = [];
  isLast: number;

  constructor(public dialog: MatDialog ,private api: ApiService,) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.pageNumer = 0;
    this.pageCount = 3;
    this.getDevices();
  }


  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
      // visible height + pixel scrolled >= total height 
      if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
        console.log("End");
        this.pageNumer ++;
        this.getDevices();
        console.log(this.pageNumer)
        console.log(this.pageCount)
        console.log(this.deviceNames.length);
        var a = this.deviceNames.length;
        console.log(a);
      }
  }
  getDevices() {
    const req = new MgCustSelectCustAccessReq(this.pageNumer,this.pageCount);
    this.api.selectCustAccess(req).subscribe(data => {
      if(data.responseCode == 0)
      {
        this.devices = data.responseData;
        this.deviceNames.push(...data.responseData);
      }
      console.log(this.devices);
      console.log(this.deviceNames );

    })
  }

  doSomething(value) {
    const req = new MgCustDeleteCustAccessReq(value)
    console.log(value);
    this.api.deleteCustAccess(req).subscribe(data => {
      if(data.responseCode == 0) {
        console.log(data);
        console.log(this.devices);
      }
    })
  }
  openDialog() {
    let  dialogRef = this.dialog.open(DialogComponent, {data: {type: DialogType.changePinDialog , title: "Change pin" }},
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
