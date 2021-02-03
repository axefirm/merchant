import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';
import { MgLoginDicData } from 'src/app/core/model/app/getDictionary';
import { MgCmerchGetMerchVerfReq } from "src/app/core/model/payment/MgCmerchGetMerchVerfReq";
import { ApiService } from 'src/app/core/services/api.service';
import { Output, EventEmitter } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

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

  @Output() getLocData = new EventEmitter<MgCmerchGetMerchVerfReq>();
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }
  addLoc: FormGroup;
  ngOnInit(): void {
    this.merchCode = sessionStorage.getItem('merchant');
    this.addLoc = this.formBuilder.group({
      location: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
    });
    this.getDictionary();



  }



  getDictionary() {

    this.api.getDictionary("dictPayeeVerifType").subscribe(data => {
      if (data.responseCode == 0) {
        this.verifType = data.responseData;
        console.log(this.verifType);
      }
    })



  }

  verifyMerh() {

    this.locData = new MgCmerchGetMerchVerfReq("test", "test", "test", "test", "test");
    this.getLocData.emit(this.locData);
    // let req = new MgCmerchGetMerchVerfReq("","", this.addLoc.controls['location'].value, this.addLoc.controls['date'].value, this.addLoc.controls['time'].value);
    // this.locData = req;
    // console.log(this.locData);

    // this.locData.location = stringify(this.addLoc.controls['location'].value);
    // this.locData.date = this.addLoc.controls['date'].value;
    // this.locData.time = this.addLoc.controls['time'].value;
    // this.test = this.addLoc.controls['time'].value;
    // this.locData.time = this.test;
    // console.log(this.locData);
    // console.log(this.locData);
  }


  // ene functiong add location bish verify deer ashiglana.
  // verifyMerh() {

  //   const req = new MgCmerchGetMerchVerfReq(this.merchCode, this.verifType[1].id, this.addLoc.controls['location'].value, this.addLoc.controls['date'].value, this.addLoc.controls['time'].value);
  //   console.log(req);
  //   this.api.verifyMerch(req).subscribe(data1 => {
  //     console.log(data1);
  //     console.log(data1.responseDesc);
  //   });
  // }

}
