import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-quick-transaction',
  templateUrl: './quick-transaction.component.html',
  styleUrls: ['./quick-transaction.component.scss']
})
export class QuickTransactionComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,) { }
  clicked: boolean;
  selectedData: string;
  main: FormGroup;
  item = '../../../../assets/img/xac.png';
  bankList = [];
  ngOnInit(): void {
    this.selectedData = this.item;
    this.bankList = [this.item, this.item, this.item, this.item, this.item, this.item, this.item, this.item, this.item];
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  change() {
    this.clicked = !this.clicked;
  }
  select(selected){
    this.change();
    console.log(selected);
    this.selectedData = selected;
  }
}