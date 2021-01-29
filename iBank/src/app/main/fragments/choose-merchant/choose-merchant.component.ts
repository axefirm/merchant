import { Component, Input, OnInit } from '@angular/core';
import { MgCmerchMerchCust } from 'src/app/core/model/payment/selectMerchCus';

@Component({
  selector: 'app-choose-merchant',
  templateUrl: './choose-merchant.component.html',
  styleUrls: ['./choose-merchant.component.scss']
})
export class ChooseMerchantComponent implements OnInit {
  @Input() merchantList: MgCmerchMerchCust[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.merchantList);
  }
  selectionChange(value) {
    console.log(value);
    sessionStorage.setItem('merchant', value);

    let merchant = sessionStorage.getItem('merchant');
    let test = merchant as unknown as MgCmerchMerchCust;
    console.log(test.merchName);
  }
}
