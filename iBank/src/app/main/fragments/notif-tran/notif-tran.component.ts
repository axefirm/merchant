import { Component, Input, OnInit } from '@angular/core';
import { find } from 'rxjs/operators';
import { MgLoginDicData } from 'src/app/core/model/app/getDictionary';
import { MgCmerchActivityListData } from 'src/app/core/model/enquire/selectMerchActivity';
import { ApiService } from 'src/app/core/services/api.service';
import { TxnService } from 'src/app/core/services/txn.service';

@Component({
  selector: 'app-notif-tran',
  templateUrl: './notif-tran.component.html',
  styleUrls: ['./notif-tran.component.scss']
})
export class NotifTranComponent implements OnInit {
  @Input() notif: MgCmerchActivityListData;

  constructor(
    private api: ApiService,
    public txn: TxnService,
  ) { }

  date: Date;
  isIncome: boolean;

  ngOnInit(): void {
    this.date = new Date(this.notif.recDate);
    this.isIncome = this.txn.isIncome(this.notif);
  }
  formatDate(){
    return this.date.getFullYear();
  }
  formatTime(){
    return this.date.getHours() + " : " + this.date.getMinutes();
  }
}
