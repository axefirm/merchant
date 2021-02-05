import { Component, Input, OnInit } from '@angular/core';
import { find } from 'rxjs/operators';
import { MgLoginDicData } from 'src/app/core/model/app/getDictionary';
import { MgCmerchActivityListData } from 'src/app/core/model/enquire/selectMerchActivity';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-notif-tran',
  templateUrl: './notif-tran.component.html',
  styleUrls: ['./notif-tran.component.scss']
})
export class NotifTranComponent implements OnInit {
  @Input() notif: MgCmerchActivityListData;

  constructor(
    private api: ApiService
  ) { }

  correspondingName: string;
  currencyMap: Map<string, string>;

  curType = {
    income: "IN",
    expense: "EX",
    pending: "PE"
  }

  ngOnInit(): void {
    // this.findCorrespondingName();
    // this.currencyMap = new Map<string, string>
    // this.currencyMap.set('MNT', '₮');
  }

  findCorrespondingName(){
    // this.api.getDictionary("dictMerchTxnType").subscribe((data) => {
    //   if(data.responseCode == 0){
    //     let res = data as MgLoginDicData[];

    //     if(this.notif.txnType == )

    //   }else alert(data.responseDesc);
    // })
    return "lmao";
  }
  formatDate(){
    return "Year XXXX"
  }
  formatTime(){
    return "O clock"
  }
}
