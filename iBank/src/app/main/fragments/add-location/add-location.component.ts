import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MgLoginDicData } from 'src/app/core/model/app/getDictionary';
import { MgCmerchGetMerchVerfReq } from "src/app/core/model/payment/MgCmerchGetMerchVerfReq";
import { ApiService } from 'src/app/core/services/api.service';
import { Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {
  verifType: MgLoginDicData[];
  merchCode: string;
  locData: MgCmerchGetMerchVerfReq;
  test: string;
  minDate: Date;
  maxDate: Date;
  selected = '09:00 AM';
  @Output() getLocData = new EventEmitter<MgCmerchGetMerchVerfReq>();
  submitted: boolean;
  date: string;
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<AddLocationComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private datePipe: DatePipe) { }
  addLoc: FormGroup;

  ngOnInit(): void {
    this.merchCode = sessionStorage.getItem('merchant');
    this.addLoc = this.formBuilder.group({
      location: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),

    });
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
    this.getDictionary();
    this.addLoc.value.time = 'option3';
    this.addLoc.controls['time'].setValue('option3');
    this.submitted = false;
  }



  getDictionary() {

    this.api.getDictionary("dictPayeeVerifType").subscribe(data => {
      if (data.responseCode == 0) {
        this.verifType = data.responseData;
        console.log(this.verifType);
      }
    })
  }

  cancel() {
    this.dialogRef.close(this.locData = null);
  }
  get addLocFormControl() {
    return this.addLoc.controls;
  }



  verifyMerh() {
    this.submitted = true;
    if (this.addLoc.valid) {
      this.date = (this.datePipe.transform(this.addLoc.value.date,"yyyy/MM/dd"));
      this.locData = new MgCmerchGetMerchVerfReq(this.merchCode, this.verifType[0].id, this.addLoc.controls['location'].value, this.date, this.addLoc.controls['time'].value)
      this.getLocData.emit(this.locData);
      console.log(this.locData);

      this.api.verifyMerch(this.locData).subscribe(data1 => {
        console.log(data1);
        console.log(data1.responseDesc);
      });
    }
  }

}
