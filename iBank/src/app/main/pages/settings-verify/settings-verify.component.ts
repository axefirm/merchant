import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogType } from 'src/app/core/model/const';
import { MgCmerchGetMerchVerifyReq, MgCmerchGetMerchVerifyRes } from 'src/app/core/model/payment/getMerchVerify';
import { DialogComponent } from '../../fragments/dialog/dialog.component';
import { ApiService } from 'src/app/core/services/api.service';
import { MgCmerchGetMerchVerfReq } from 'src/app/core/model/payment/MgCmerchGetMerchVerfReq';
import { IgxTimePickerComponent } from 'igniteui-angular';


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
  reqTest: MgCmerchGetMerchVerifyRes;


  constructor(public dialog: MatDialog, private api: ApiService,) { }

  ngOnInit(): void {
    this.merchCode = sessionStorage.getItem('merchant');
    this.checkStatus();
    this.savedLocData = null;
    console.log(this.savedLocData);
  }

  checkStatus() {

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

verify() {
    // // ene functiong add location bish verify deer ashiglana.
    if(this.savedLocData!=null) {
      this.reqTest = this.savedLocData;
      console.log(this.reqTest);

      this.api.verifyMerch(this.savedLocData).subscribe(data =>
        {

       console.log(data);
      //   console.log(data1.responseDesc);
      });
    }
    console.log("a00");
    
  }

  
  public today: Date = new Date();

  public onBlur(inputValue: string, value: Date, picker: IgxTimePickerComponent) {
      const parts = inputValue.split(/[\s:]+/);

      const hour = parseInt(parts[0], 10);
      const minutes = parseInt(parts[0], 10);

      if (picker.validHourEntries.indexOf(hour) !== -1 && picker.validMinuteEntries.indexOf(minutes) !== -1) {
          value.setHours(hour, minutes);
      } else {
          throw new Error("This is not a valid hour.");
      }
  }

  public selectNow(timePicker: IgxTimePickerComponent) {
      timePicker.value = this.today;
      timePicker.close();
  }
}
