import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { MgCmerchPendTxn } from 'src/app/core/model/transaction/selectPendTxns';
import { DataService } from 'src/app/core/services/data.service'



export interface Transaction {
  amount: string;
  bankName: string;
  correspondentName: string;
  accountNo: string;
  description: string;
  date: string;
}

@Component({
  selector: 'app-pending-transfer',
  templateUrl: './pending-transfer.component.html',
  styleUrls: ['./pending-transfer.component.scss']
})



export class PendingTransferComponent implements OnInit {


  PendingTxn: MgCmerchPendTxn[];
  constructor(private dataService: DataService) { }
  displayedColumns: string[] = ['bankamount', 'amount', 'acntNo', 'date'];


  test = true;
  ngOnInit() {
    if(this.dataService.data != null){
      let test = JSON.parse(this.dataService.data);
      console.log(test.param);
      this.PendingTxn = test.param;

    }
  }

}
