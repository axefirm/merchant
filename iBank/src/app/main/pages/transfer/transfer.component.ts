import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MgCmerchPendTxn } from 'src/app/core/model/transaction/selectPendTxns';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { ApiService } from 'src/app/core/services/api.service';
import { MgCmerchMerchCust, MgCmerchSelectMerchCustReq } from 'src/app/core/model/payment/selectMerchCus';
import { MgCmerchInitTxnReq } from 'src/app/core/model/transaction/initTxn';
import { MgCmerchInqAcntData } from 'src/app/core/model/enquire/getMerchAcntList';


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
  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router, private api: ApiService) { }

  displayedColumns: string[] = ['select', 'bankamount', 'amount', 'acntNo', 'date'];


  test = true;

  arrayCheckBoxList: Array<Boolean> = [];
  myarray: Array<MgCmerchPendTxn> = [];

  merchCode: string;

  //#region Transaction 
  merchCustList: MgCmerchMerchCust[];
  merchAcntList: MgCmerchInqAcntData[];
  //#endregion

  //#region FormGroup
  main: FormGroup;
  p2pOwn: FormGroup;
  p2pOther: FormGroup;
  //#endregion

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

    this.p2pOwn = this.formBuilder.group({
      srcAcntId: new FormControl(''),
      dstAcntId: new FormControl(''),
      amt: new FormControl(''),
      cur: new FormControl(''),
    });
    this.p2pOther = this.formBuilder.group({
      srcAcntId: new FormControl(''),
      dstAcntId: new FormControl(''),
      amt: new FormControl(''),
      cur: new FormControl(''),
    });
    
    this.Init();
  }

  Init() {
    this.merchCode = sessionStorage.getItem('merchant');
    const selectMerchReq = new MgCmerchSelectMerchCustReq(this.merchCode);
    this.api.getMerchAcntList(selectMerchReq).subscribe(res => {
      console.log(res);
      if (res.responseCode == 0) {
        this.merchAcntList = res.responseData;
        this.p2pOwn.controls['srcAcntId'].setValue(this.merchAcntList[0].acntId);
        }
      }
    )

    // let Pending = new MgCmerchPendTxn(1, 'merchcode 1', 'operCode 2', 'operType 3', 'operName 4', 'dstFiCode 5', 'dstFiName 6', 'dstAcntName 7', 8, 'txnCur 9', 10, 'acntCode 11', 'txnDesc 12', 'initCustId 13', 'initCustName 14', 'initDateTime 15');
    // this.PendingTxn = [Pending, Pending, Pending];
    // for (var i = 0; i < this.PendingTxn.length; i++) {
    //   this.arrayCheckBoxList.push(false);
    // }
  }

  sendP2POwn() {
    const req = new MgCmerchInitTxnReq();
    req.merchCode = this.merchCode;

    console.log(this.p2pOwn.controls['acntCode'].value);

  }

  sendP2Pp2pOther() {
    const req = new MgCmerchInitTxnReq();
    req.merchCode = this.merchCode;

    console.log(this.p2pOwn.controls['acntCode'].value);

  }

  sendP2PCorp() {
    const req = new MgCmerchInitTxnReq();
    req.merchCode = this.merchCode;

    console.log(this.p2pOwn.controls['acntCode'].value);

  }
}
