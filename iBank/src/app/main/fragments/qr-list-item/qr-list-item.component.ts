import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogType } from 'src/app/core/model/const';
import { MgCmerchGetListData } from 'src/app/core/model/payment/getMerchantQrList';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-qr-list-item',
  templateUrl: './qr-list-item.component.html',
  styleUrls: ['./qr-list-item.component.scss']
})
export class QrListItemComponent implements OnInit {

  @Input() qrListItem: MgCmerchGetListData;
  constructor(public dialog: MatDialog) { }
  width: number;

  ngOnInit(): void {
    if (window.innerWidth >= 768) {
      this.width = 60;
    } else {
      this.width = 30;
    }
  }
  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { data: { type: DialogType.qr, value: this.qrListItem, title: "Download QR code " } },
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}

