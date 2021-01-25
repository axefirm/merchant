import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MgCmerchInqAcntData } from 'src/app/core/model/enquire/getMerchAcntList';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss'],
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
export class CardSliderComponent implements OnInit {
  @Input() accounts: MgCmerchInqAcntData[];
  indicator = 0;
  constructor() { }

  ngOnInit(): void {
  }
  next(input: number) {
    if (input < this.accounts.length) {
      this.indicator = input;
    } else {
      this.indicator = 0;
    }
  }
}
