import { Component, Input, OnInit } from '@angular/core';
import { MgCmerchGetListData } from 'src/app/core/model/payment/getMerchantQrList';

@Component({
  selector: 'app-qr-download',
  templateUrl: './qr-download.component.html',
  styleUrls: ['./qr-download.component.scss']
})
export class QrDownloadComponent implements OnInit {

  @Input() qrListItem: MgCmerchGetListData;
  constructor() { }

  ngOnInit(): void {
  }

}
