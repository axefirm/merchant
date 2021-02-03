import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MgCustChangeMsisdnReq, MgCustVerifyRes } from 'src/app/core/model/app/changeMobile';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-change-mobile',
  templateUrl: './change-mobile.component.html',
  styleUrls: ['./change-mobile.component.scss']
})
export class ChangeMobileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  main: FormGroup;
  res: MgCustVerifyRes;
  ngOnInit(): void {
    this.main = this.formBuilder.group({
      mobile: new FormControl('', [Validators.required]),
    });
  }

  changeMobile() {
    const req = new MgCustChangeMsisdnReq(this.main.value.mobile);
    this.api.changeMsisdn(req).subscribe(res => {
      console.log(res);
      this.res = res as MgCustVerifyRes;
      if(this.res.responseCode == 0){
        
      }
    }, error => {
      alert(error);
    })
  }
}
