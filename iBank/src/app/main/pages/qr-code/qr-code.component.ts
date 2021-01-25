import { Component, OnInit } from '@angular/core';
import { MgCmerchCreateMerchAcntRes } from 'src/app/core/model/Online user registration/createMerchAcnt';
import { MgCmerchGetListData, MgCmerchGetMerchQrListRes } from 'src/app/core/model/payment/getMerchantQrList';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {

  qrListRes: MgCmerchGetListData[];

  constructor() { }

  ngOnInit():void {
    this.Init();
  }

  Init() {
    let qrList = new MgCmerchGetListData("Thomas Wayne", "5108202171", "qrcode123","posCode");
    this.qrListRes = [ qrList,qrList,qrList ];
    console.log(qrList);
  }

}
