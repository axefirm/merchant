export class MgCmerchUpdateTxnPendReq {
  merchCode: string;
  dstAcntCode: string;
  dstAcntCur: string;
  dstAcntId: number;
  dstAcntName: string;
  dstFiCode: string;
  dstMsisdn: string;
  initCustId: string;
  operCode: string;
  pendId: number;
  srcAcntId: number;
  status: string;
  txnAmt: number;
  txnCur: string;
  txnDesc: string;

  constructor(
    merchCode: string,
    dstAcntCode: string,
    dstAcntCur: string,
    dstAcntId: number,
    dstAcntName: string,
    dstFiCode: string,
    dstMsisdn: string,
    initCustId: string,
    operCode: string,
    pendId: number,
    srcAcntId: number,
    status: string,
    txnAmt: number,
    txnCur: string,
    txnDesc: string
  ) {
    this.merchCode = merchCode
    this.dstAcntCode = dstAcntCode
    this.dstAcntCur = dstAcntCur
    this.dstAcntId = dstAcntId
    this.dstAcntName = dstAcntName
    this.dstFiCode = dstFiCode
    this.dstMsisdn = dstMsisdn
    this.initCustId = initCustId
    this.operCode = operCode
    this.pendId = pendId
    this.srcAcntId = srcAcntId
    this.status = status
    this.txnAmt = txnAmt
    this.txnCur = txnCur
    this.txnDesc = txnDesc
  }

}



export class MgCmerchMainRes {
  responseCode: number;
  responseDesc: string;

  constructor(responseCode: number, responseDesc: string) {
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}
