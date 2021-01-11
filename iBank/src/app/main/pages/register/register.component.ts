import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ListKeyManager } from '@angular/cdk/a11y';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

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


  constructor(private formBuilder: FormBuilder) { }

  main: FormGroup;
  indicator = 0;
  maxIndex = 4;

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
