import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MgCmerchPendTxn } from 'src/app/core/model/transaction/selectPendTxns';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';


export interface Transaction {
  amount: string;
  bankName: string;
  correspondentName: string;
  accountNo: string;
  description: string;
  date: string;
}

const ELEMENT_DATA1: Transaction[] = [
  { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka" },
  { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka" },
  { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka" },
  { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka" },
];

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})

export class TransferComponent implements OnInit {

  //Api 
  PendingTxn: MgCmerchPendTxn[];
  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) { }

  displayedColumns: string[] = ['select', 'bankamount', 'amount', 'acntNo', 'date'];


  test = true;
  arrayCheckBoxList: Array<Boolean> = [];
  main: FormGroup;
  myarray: Array<MgCmerchPendTxn> = [];

  OpenPendingComp() {
    const queryParams: any = {};
    this.myarray.push();
    for (var i = 0; i < this.arrayCheckBoxList.length; i++) {
      if (this.arrayCheckBoxList[i]) {
        console.log(this.PendingTxn[i]);
        this.myarray.push(this.PendingTxn[i]);
      };
      
    }

    console.log(this.myarray);
    queryParams.param = this.myarray;
    // queryParams = queryParams.substring(1, queryParams.length() -1 );
    this.dataService.data = JSON.stringify(queryParams);

    console.log(queryParams.myArray);
    this.router.navigate(['/transaction/approval']);
  }


  ngOnInit(): void {
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.Init();
  }
  Init() {
    let Pending = new MgCmerchPendTxn(1, 'merchcode 1', 'operCode 2', 'operType 3', 'operName 4', 'dstFiCode 5', 'dstFiName 6', 'dstAcntName 7', 8, 'txnCur 9', 10, 'acntCode 11', 'txnDesc 12', 'initCustId 13', 'initCustName 14', 'initDateTime 15');
    this.PendingTxn = [Pending, Pending, Pending];
    for (var i = 0; i < this.PendingTxn.length; i++) {
      this.arrayCheckBoxList.push(false);
    }
  }

  array = [MgCmerchPendTxn, MgCmerchPendTxn, MgCmerchPendTxn]



}


// export class TransferComponent implements OnInit {


//   //Api 
//   PendingTxn: MgCmerchPendTxn[];


//   constructor(private formBuilder: FormBuilder, private router: Router) { }

//   displayedColumns: string[] = ['select', 'bankamount', 'amount', 'acntNo', 'date'];
//   dataSource = ELEMENT_DATA1;



//   test = true;

//   test1: boolean;
//   arrayCheckBoxList: Array<Boolean> = [];
//   main: FormGroup;
//   myarray: Array<MgCmerchPendTxn> = [];

//   OpenPendingComp() {
//     const queryParams: any = {};
//     for (var i = 0; i < this.arrayCheckBoxList.length; i++) {
//       if (this.arrayCheckBoxList[i]) {
//         console.log(this.PendingTxn[i]);
//         this.myarray.push(this.PendingTxn[i]);
//         queryParams.myArray = JSON.stringify(this.myarray);
//         const navigationExtras: NavigationExtras = {
//           queryParams
//         };
//         this.router.navigate(['/transaction/approval'],navigationExtras);
//       }
//     }
//     console.log(this.myarray);
//   }


//   ngOnInit(): void {
//     this.main = this.formBuilder.group({
//       useramount: new FormControl('', [Validators.required]),
//       password: new FormControl('', [Validators.required]),
//     });
//     this.Init();
//   }
//   Init() {
//     let Pending = new MgCmerchPendTxn(1, 'merchcode 1', 'operCode 2', 'operType 3', 'operName 4', 'dstFiCode 5', 'dstFiName 6', 'dstAcntName 7', 8, 'txnCur 9', 10, 'acntCode 11', 'txnDesc 12', 'initCustId 13', 'initCustName 14', 'initDateTime 15');
//     this.PendingTxn = [Pending, Pending, Pending];
//     for (var i = 0; i < this.PendingTxn.length; i++) {
//       this.arrayCheckBoxList.push(false);
//     }
//   }

//   //  array = [MgCmerchPendTxn, MgCmerchPendTxn, MgCmerchPendTxn]

// }
