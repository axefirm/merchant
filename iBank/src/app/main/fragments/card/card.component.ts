import { Component, Input, OnInit } from '@angular/core';
import { MgCmerchInqAcntData } from 'src/app/core/model/enquire/getMerchAcntList';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() img: string = "./../../../../assets/img/card.png";
  // @Input() acntNo: string = "5000 6116 6224 2584";
  // @Input() currency: string = "MNT";
  // @Input() balance: string = "1,200,000.00";
  // @Input() qr: string = "test";
  @Input() shadow: boolean = false;
  @Input() account: MgCmerchInqAcntData;
  constructor() { }

  ngOnInit(): void {
  }

}
