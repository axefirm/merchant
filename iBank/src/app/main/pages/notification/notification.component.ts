import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MgCmerchCheckUnreadSmartReq } from 'src/app/core/model/enquire/checkUnreadSmart';
import { MgCmerchReadSmartNotifReq } from 'src/app/core/model/enquire/readMerchSmartNotif';
import { MgCmerchActivityListData, MgCmerchActivityListReq } from 'src/app/core/model/enquire/selectMerchActivity';
import { ApiService } from 'src/app/core/services/api.service';

// export interface Notif {
//   type: Type;
//   amount: string;
//   bankName: string;
//   correspondentName: string;
//   accountNo: string;
//   description: string;
//   date: string;
//   time: string;
// }
// export const NOTIFS: Notif[] = [
//   { type: Type.Transaction, bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time: "12:04" },
//   { type: Type.Transaction, bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time: "12:04" },
//   { type: Type.Notification, bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time: "12:04" },
//   { type: Type.Transaction, bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time: "12:04" },
//   { type: Type.Notification, bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time: "12:04" },
//   { type: Type.Notification, bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka", time: "12:04" },

// ];

export const EXAMPLE_EL_TXN_1: MgCmerchActivityListData = new MgCmerchActivityListData(
  "fiName",
  "fiIcon",
  "dstAcntName",
  "IN",
  1000,
  "MNT",
  "srcAcntCode",
  "srcAcntName",
  "notifSubj",
  "notifBody",
  "2010-01-28T13:15:18.547Z",
  "TXN",
)
export const EXAMPLE_EL_TXN_2: MgCmerchActivityListData = new MgCmerchActivityListData(
  "fiName",
  "fiIcon",
  "dstAcntName",
  "EX",
  1000,
  "MNT",
  "srcAcntCode",
  "srcAcntName",
  "notifSubj",
  "notifBody",
  "2010-01-28T13:15:18.547Z",
  "TXN",
)
export const EXAMPLE_EL_NOTIF: MgCmerchActivityListData = new MgCmerchActivityListData(
  "fiName",
  "fiIcon",
  "dstAcntName",
  "txnType",
  1000,
  "MNT",
  "srcAcntCode",
  "srcAcntName",
  "notifSubj",
  "notifBody",
  "2010-01-28T13:15:18.547Z",
  "NOTIF",
)

export const EXAMPLE: MgCmerchActivityListData[] = [
  EXAMPLE_EL_TXN_1,
  EXAMPLE_EL_NOTIF,
  EXAMPLE_EL_TXN_2,
  EXAMPLE_EL_NOTIF,
  EXAMPLE_EL_TXN_1,
  EXAMPLE_EL_NOTIF,
  EXAMPLE_EL_TXN_2,
  EXAMPLE_EL_NOTIF,
  EXAMPLE_EL_TXN_1,
  EXAMPLE_EL_NOTIF,
  EXAMPLE_EL_TXN_1,
  EXAMPLE_EL_NOTIF,
  EXAMPLE_EL_TXN_2,
  EXAMPLE_EL_NOTIF,
  EXAMPLE_EL_TXN_1,
  EXAMPLE_EL_NOTIF,
  EXAMPLE_EL_TXN_2,
  EXAMPLE_EL_NOTIF,
  EXAMPLE_EL_TXN_1,
  EXAMPLE_EL_NOTIF,
]

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})

export class NotificationComponent implements OnInit {
  constructor(
    private api: ApiService
  ) { }

  activityType = {
    notif: "NOTIF",
    tran: "TXN",
  }

  notifs: MgCmerchActivityListData[];

  merchCustId: string;
  pageNum = 0;
  hasNextPage = false;

  ngOnInit(): void {
    this.notifs = EXAMPLE;
    this.merchCustId = sessionStorage.getItem("merchCustId");
    this.getActivity();
  }

  nextP(){
    this.pageNum++;
    this.getActivity();
  }
  prevP(){
    this.pageNum--;
    this.getActivity()
  }

  getActivity(){
    this.api.selectMerchActivity(new MgCmerchActivityListReq(this.merchCustId, this.pageNum, this.getActivityPerCount())).subscribe((data) =>{
      if(data.responseCode == 0){
        this.notifs = data.responseData;
        this.checkNextPage();
        this.readActivity(this.notifs);
      }else{
        alert(data.responseDesc);
        this.notifs = EXAMPLE;
      }
    })
  }
  getActivityPerCount(){
    return 9;
  }
  readActivity(data: MgCmerchActivityListData[]){

    let recIds = [];
    let refnos = [];

    data.forEach((el) => {
      if(el.recType == this.activityType.notif){
        // refnos.push(el.refno); 
      }else if(el.recType == this.activityType.tran){
        // recIds.push(el.recId);
      }
    })

    this.api.readMerchSmartNotif(new MgCmerchReadSmartNotifReq(this.merchCustId, recIds, refnos)).subscribe((data) => {
      if(data.responseCode == 0){
        // read
      }else{
        alert(data.responseDesc);
      }
    })
  }
  checkNextPage(){
    this.api.checkUnreadSmart(new MgCmerchCheckUnreadSmartReq(this.merchCustId)).subscribe((data) => {
      if(data.responseCode == 0){
        this.hasNextPage = data.unread;
      }else{
        // bla2
      }
    })
  }
}


