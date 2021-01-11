import { Component, Input, OnInit } from '@angular/core';
import { Notif } from '../../pages/notification/notification.component';

@Component({
  selector: 'app-notif-tran',
  templateUrl: './notif-tran.component.html',
  styleUrls: ['./notif-tran.component.scss']
})
export class NotifTranComponent implements OnInit {
  @Input() notif: Notif;

  constructor() { }

  ngOnInit(): void {
  }

}
