export class MgCmerchActivityListReq {
  custId: string;
  currentPage: number;
  activityPerCount: number;

  constructor(custId: string, currentPage: number, activityPerCount: number) {
    this.custId = custId
    this.currentPage = currentPage
    this.activityPerCount = activityPerCount
  }

}




export class MgCmerchActivityListRes {
  responseData: MgCmerchActivityListData[];
  pageCount: number;
  responseCode: number;
  responseDesc: string;

  constructor(
    responseData: MgCmerchActivityListData[],
    pageCount: number,
    responseCode: number,
    responseDesc: string
  ) {
    this.responseData = responseData
    this.pageCount = pageCount
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }


}

export class MgCmerchActivityListData {
  fiName: string;
  fiIcon: string;
  dstAcntName: string;
  txnType: string;
  txnAmt: number;
  txnCur: string;
  srcAcntCode: string;
  srcAcntName: string;
  notifSubj: string;
  notifBody: string;
  recDate: string;
  recType: string;

  constructor(
    fiName: string,
    fiIcon: string,
    dstAcntName: string,
    txnType: string,
    txnAmt: number,
    txnCur: string,
    srcAcntCode: string,
    srcAcntName: string,
    notifSubj: string,
    notifBody: string,
    recDate: string,
    recType: string
  ) {
    this.fiName = fiName
    this.fiIcon = fiIcon
    this.dstAcntName = dstAcntName
    this.txnType = txnType
    this.txnAmt = txnAmt
    this.txnCur = txnCur
    this.srcAcntCode = srcAcntCode
    this.srcAcntName = srcAcntName
    this.notifSubj = notifSubj
    this.notifBody = notifBody
    this.recDate = recDate
    this.recType = recType
  }

}
