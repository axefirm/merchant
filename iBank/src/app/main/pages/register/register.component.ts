import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ListKeyManager } from '@angular/cdk/a11y';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ApiService } from 'src/app/core/services/api.service';
import { MgCmerchStartEnrollByMerchReq, MgCmerchStartEnrollByMerchRes } from 'src/app/core/model/Online user registration/startEnrollByMerch';
import { MgCmerchVerifyLoginCodeReq } from 'src/app/core/model/Online user registration/verifyLoginCode';
import { MgCmerchEnrollMerchReq } from 'src/app/core/model/Online user registration/enrollMerch';
import { MgCmerchAddMembIntoMerchReq } from 'src/app/core/model/Online user registration/addMembIntoMerch';
import { MgCmerchInqAcntListReq } from 'src/app/core/model/enquire/getMerchAcntList';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('myAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(
        'void => *',
        animate(
          '600ms ease-in',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1.0 }),
          ])
        )
      ),
    ]),
  ],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  main: FormGroup;
  indicator = 0;
  maxIndex = 4;
  regAsComp = true;

  enrollId;

  ngOnInit(): void {
    this.reset();
  }
  reset(){
    this.indicator = 0;
    this.main = this.formBuilder.group({
      amount: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required]),
      regNo: new FormControl('', [Validators.required]),
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      tan: new FormControl('', [Validators.required]),

      name: new FormControl('', [Validators.required]),
      merchType: new FormControl('', [Validators.required]),
      orgTypeId: new FormControl('', [Validators.required]),
    });
  }
  codeTester(){
    this.api.getMerchAcntList(new MgCmerchInqAcntListReq("0")).subscribe((data) => {
      console.log(data);
    })
  }

  public moveToStructure(): void {
    console.log('gg');
  }

  public onChange(): void {
    console.log('gg');
  }

  startEnrollByMerch() {
    const startEnrollByMerchReq = new MgCmerchStartEnrollByMerchReq(
      'wallet',
      this.main.value.mobileNo,
      this.main.value.regNo,
      this.main.value.fname,
      this.main.value.lname
    );
    this.api.startEnrollByMerch(startEnrollByMerchReq).subscribe((data) => {
      if(data.responseCode == 0){
        this.enrollId = data.enrollId;
        this.next1();
      }else{
        alert(data.responseDesc);
        this.reset();
      }
    });
  }
  checkTan(){
    const verifyLoginCodeReq = new MgCmerchVerifyLoginCodeReq (
      this.enrollId, this.main.value.tan
    );
    this.api.verifyLoginCode(verifyLoginCodeReq).subscribe((data) =>{
      if(data.responseCode == 0){
        //do stuff
        this.next1();
      }else{
        alert(data.responseDesc);
        //For now just skip
        this.next1();
      }
    });
  }
  enrollMerch(){
    //idk
    const notOptional = "";
    const enrollMerchReq = new MgCmerchEnrollMerchReq(
      this.main.value.name,
      notOptional,
      notOptional,
      this.main.value.merchType,
      this.main.value.orgTypeId,
      notOptional,
    );
    this.api.enrollMerch(enrollMerchReq).subscribe((data) =>{
      if(data.responseCode == 0){
        //do stuff
        this.next1();
      }else{
        alert(data.responseDesc);
      }
    });
  }
  Finish(){
    const roleId = 12334;
    const merchCode = "where?";
    const addMembIntoMerchReq = new MgCmerchAddMembIntoMerchReq (
      this.main.value.mobileno,
      this.main.value.regNo,
      this.main.value.fname,
      this.main.value.lname,
      roleId,
      merchCode,
    )
  }

  changeRegAs(input: boolean) {
    this.regAsComp = input;
  }
  next1(){
    this.next(this.indicator + 1);
  }
  next(input: number) {
    // console.log(this.main);
    if (input < this.maxIndex) {
      this.indicator = input;
    } else {
      // TODO
      // this.indicator = 0;
    }
  }
}
