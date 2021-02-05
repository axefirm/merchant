import { Component, Input, OnInit } from '@angular/core';
import { MgCmerchActivityListData } from 'src/app/core/model/enquire/selectMerchActivity';

@Component({
  selector: 'app-notif-detail',
  templateUrl: './notif-detail.component.html',
  styleUrls: ['./notif-detail.component.scss']
})
export class NotifDetailComponent implements OnInit {
  @Input() notif: MgCmerchActivityListData;

  constructor() { }

  ngOnInit(): void {
  }

}
