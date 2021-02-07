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
  typeNotif = "NOTIF";
  typeTran = "TXN";
  notifs: MgCmerchActivityListData[];

  custId: any;

  activity: MgCmerchActivityListData [];

  ngOnInit(): void {

    this.activity = EXAMPLE;
    this.filterUnread();

    this.custId = sessionStorage.getItem("custId");
    this.getActivity();


  }

  getActivity(){
    this.api.selectMerchActivity(new MgCmerchActivityListReq(sessionStorage.getItem("merchCustId"), 0, 100)).subscribe((data) =>{
      if(data.responseCode == 0){
        this.activity = data.responseData;
        this.filterUnread();
      }else{
        alert(data.responseDesc);
        this.activity = EXAMPLE;
        this.filterUnread();
      }
    })
  }

  filterUnread(){

    ///filter which are unread?

    this.notifs = this.activity as MgCmerchActivityListData[];
  }
}


