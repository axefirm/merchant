import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quick-transaction',
  templateUrl: './quick-transaction.component.html',
  styleUrls: ['./quick-transaction.component.scss']
})
export class QuickTransactionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,) { }

 
  main: FormGroup;

  ngOnInit(): void {
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
