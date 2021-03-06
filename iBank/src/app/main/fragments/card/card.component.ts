import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MgCmerchInqAcntData } from 'src/app/core/model/enquire/getMerchAcntList';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('fadeInAndOut', [
      transition(':enter', [
        style({opacity: 0.3}),
        animate('200ms ease-in', style({opacity: 1.0}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({opacity: 0.3}))
      ])
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() img: string = "./../../../../assets/img/card.png";
  // @Input() acntNo: string = "5000 6116 6224 2584";
  // @Input() currency: string = "MNT";
  // @Input() balance: string = "1,200,000.00";
  // @Input() qr: string = "test";
  @Input() chosen: boolean = false;
  @Input() shadow: boolean = false;
  @Input() account: MgCmerchInqAcntData;
  @Input() index: number;
  @Output() indexEmitter = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    // console.log(this.chosen);
  }


  onClick(){
    this.indexEmitter.emit(this.index);
  }
}
