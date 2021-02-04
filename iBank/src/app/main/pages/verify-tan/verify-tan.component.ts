import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MgCustVerifyRes } from 'src/app/core/model/app/changeMobile';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-verify-tan',
  templateUrl: './verify-tan.component.html',
  styleUrls: ['./verify-tan.component.scss']
})
export class VerifyTanComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  main: FormGroup;
  res: MgCustVerifyRes;

  ngOnInit(): void {
    this.main = this.formBuilder.group({
      tan: new FormControl('', [Validators.required]),
    });
  }
  verifyTan() {
    console.log(this.main.value.tan);
    if(this.main.value.tan.length == 6){

    }else{
      
    }
  }
}
