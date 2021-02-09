import { Injectable } from '@angular/core';
import { MgCmerchInqAcntTranRefData } from '../model/enquire/getTranRefReport';
import { MgCmerchActivityListData } from '../model/enquire/selectMerchActivity';
import { MgCmerchSelectPendTxnsRes } from '../model/transaction/selectPendTxns';

const txnType = {
  income: 'IN',
  expense: 'EX',
};

const currencyMap = new Map<string, string>([
  ['MNT', '₮'],
  ['MN', '₮'],
  ['EN', '$'],
  ['ENG', '$'],
]);

@Injectable({
  providedIn: 'root',
})
export class TxnService {
  constructor() {}

  getCurrencySymbol(currency: string) {
    // there may be a better way to implement this
    return currencyMap.get(currency);
  }

  isIncome(data: any) {
    return data.txnType == txnType.income;
  }
  
  getCorrespondingCode(data: any) {
    if (this.isIncome(data)) {
      return data.srcAcntCode;
    } else {
      // no dstAcntCode for but okay
      return data.dstAcntName;
    }
  }

  getCorrespondingName(data: any){
    if(this.isIncome(data)){
      return data.srcAcntName;
    }else{
      return data.dstAcntName;
    }
  }
  
  getCorrespondingName2(data: any){
    // adawdwada
  }
}
