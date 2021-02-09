import { Component, OnInit } from '@angular/core';
import { MgCmerchCreateMerchAcntRes } from 'src/app/core/model/Online user registration/createMerchAcnt';
import {
  MgCmerchGetListData,
  MgCmerchGetMerchQrListReq,
  MgCmerchGetMerchQrListRes,
} from 'src/app/core/model/payment/getMerchantQrList';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent implements OnInit {
  constructor(private api: ApiService) {}

  qrListRes: MgCmerchGetListData[];
  merchCode: string;
  ngOnInit(): void {
    this.Init();
  }

  Init() {
    // only debug purposes only
    let qrList = new MgCmerchGetListData(
      'Thomas Wayne',
      '5108202171',
      'qrcode123',
      'posCode'
    );
    this.qrListRes = [qrList, qrList, qrList];
    this.merchCode = sessionStorage.getItem('merchantCode');
    // this.merchCode = "not find";
    this.getMerchantQrList();
    // debug purposes
  }
  getMerchantQrList() {
    this.api
      .getMerchantQrList(new MgCmerchGetMerchQrListReq(this.merchCode))
      .subscribe((data) => {
        if (data.responseData.length == 0) {
        }
        if (data.responseCode == 0) {
          this.qrListRes = data.responseData;
        } else {
          alert(data.responseDesc);
        }
      });
  }
}
