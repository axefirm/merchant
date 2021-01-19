import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-result',
  templateUrl: './transaction-result.component.html',
  styleUrls: ['./transaction-result.component.scss']
})
export class TransactionResultComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,) { }

  main: FormGroup;
  trSuccess = 0;

  ngOnInit(): void {
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      trSuccess: new FormControl('', [Validators.required]),
    });
  }

  test() {
    console.log(this.main);
    if(this.trSuccess == 1) this.trSuccess = 0;
    else this.trSuccess = 1;
  }
}
