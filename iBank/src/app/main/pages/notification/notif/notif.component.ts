import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';

export interface Notif {
  amount: string;
  bankName: string;
  correspondentName: string;
  accountNo: string;
  description: string;
  date: string;
  time: string;
}


export const NOTIFS: Notif[] = [
  { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time:"12:04" },
  { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time:"12:04" },
  { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time:"12:04" },
  { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time:"12:04" },
  { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time:"12:04" },
  { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time:"12:04" },
];


@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.scss']
})
export class NotifComponent implements OnInit {
  notifs = NOTIFS;
  selectedHero: Notif;

  constructor() { }

  ngOnInit(): void {
  }

}
