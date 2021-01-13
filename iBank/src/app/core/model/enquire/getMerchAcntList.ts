export class MgCmerchInqAcntListReq {
  merchCode: string;

  constructor(merchCode: string) {
    this.merchCode = merchCode
  }
}

export class MgCmerchInqAcntListRes {
  responseData: MgCmerchInqAcntData[];
  responseCode: number;
  responseDesc: string;

  constructor(responseData: MgCmerchInqAcntData[], responseCode: number, responseDesc: string) {
    this.responseData = responseData
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}
export class MgCmerchInqAcntData {
  fiCode: string;
  fiName: string;
  acntCode: string;
  acntId: number;
  acntName: string;
  acntType: string;
  curCode: string;
  ledgerBalance: number;
  availBal: number;
  txnDate: string;
  qrCode: string;

  constructor(
    fiCode: string,
    fiName: string,
    acntCode: string,
    acntId: number,
    acntName: string,
    acntType: string,
    curCode: string,
    ledgerBalance: number,
    availBal: number,
    txnDate: string,
    qrCode: string
  ) {
    this.fiCode = fiCode
    this.fiName = fiName
    this.acntCode = acntCode
    this.acntId = acntId
    this.acntName = acntName
    this.acntType = acntType
    this.curCode = curCode
    this.ledgerBalance = ledgerBalance
    this.availBal = availBal
    this.txnDate = txnDate
    this.qrCode = qrCode
  }

}
