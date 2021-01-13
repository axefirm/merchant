import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';

export interface Notif {
  type: Type;
  amount: string;
  bankName: string;
  correspondentName: string;
  accountNo: string;
  description: string;
  date: string;
  time: string;
}

enum Type {
  Notification,
  Transaction
}
export const NOTIFS: Notif[] = [
  { type: Type.Transaction, bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time: "12:04" },
  { type: Type.Transaction, bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time: "12:04" },
  { type: Type.Notification, bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time: "12:04" },
  { type: Type.Transaction, bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time: "12:04" },
  { type: Type.Notification, bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time: "12:04" },
  { type: Type.Notification, bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time: "12:04" },

];


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})

export class NotificationComponent implements OnInit {
  constructor() { }
  typeNotif = Type.Notification;
  typeTran = Type.Transaction;
  notifs = NOTIFS;
  ngOnInit(): void {
  }

}


