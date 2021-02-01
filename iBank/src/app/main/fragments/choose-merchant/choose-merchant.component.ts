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
    console.log(value.merchCode);
    sessionStorage.setItem('merchant', value.merchCode);

    let merchant = sessionStorage.getItem('merchant');
    console.log(merchant);
  }
}
