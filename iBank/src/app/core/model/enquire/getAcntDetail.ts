export class MgCmerchInqAcntDetailReq {
  merchCode: string;
  acntId: number;

  constructor(merchCode: string, acntId: number) {
    this.merchCode = merchCode
    this.acntId = acntId
  }

}

export class MgCmerchInqAcntDetailRes {
  acntName: string;
  acntCode: string;
  status: string;
  ledgerBalance: number;
  avaiBalance: number;
  rate: number;
  curCode: string;
  txnDate: string;
  fiCode: string;
  fiName: string;
  responseCode: number;
  responseDesc: string;

  constructor(
    acntName: string,
    acntCode: string,
    status: string,
    ledgerBalance: number,
    avaiBalance: number,
    rate: number,
    curCode: string,
    txnDate: string,
    fiCode: string,
    fiName: string,
    responseCode: number,
    responseDesc: string
  ) {
    this.acntName = acntName
    this.acntCode = acntCode
    this.status = status
    this.ledgerBalance = ledgerBalance
    this.avaiBalance = avaiBalance
    this.rate = rate
    this.curCode = curCode
    this.txnDate = txnDate
    this.fiCode = fiCode
    this.fiName = fiName
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}
