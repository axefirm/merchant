import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ListKeyManager } from '@angular/cdk/a11y';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { MgCmerchAddMembIntoMerchReq } from 'src/app/core/model/Online user registration/addMembIntoMerch';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('myAnimation', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', animate('600ms ease-in', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1.0})
      ])))
  ]),
  ]
})
export class RegisterComponent implements OnInit{


  constructor(private formBuilder: FormBuilder, private api : ApiService) { }

  main: FormGroup;
  indicator = 0;
  maxIndex = 4;
  regAsComp = true;

  ngOnInit(): void {
    this.main = this.formBuilder.group({
      amount: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required]),
      regNo: new FormControl('', [Validators.required]),
      fname : new FormControl('', [Validators.required]),
      lname : new FormControl('', [Validators.required]),
      tan : new FormControl('', [Validators.required]),
    });
  }

  public moveToStructure(): void {
    console.log("gg");
  }
  
  public onChange(): void {
    console.log("gg");
  }

  register(){
    const registerData = new MgCmerchAddMembIntoMerchReq('99194730', 'Ukh0221', 'ganbat', 'selenge', 123, 'mmao');
    this.api.addMembIntoMerch(registerData).subscribe(data => {
      console.log(data);
    });
  }

  changeRegAs(input: boolean){
   this.regAsComp = input;
  }

  next(input: number) {
    console.log(this.main);
    if (input < this.maxIndex) {
      this.indicator = input;
    } else {
      // TODO
      // this.indicator = 0;
    }
  }
  
}
