export class MgCmerchGetMerchQrDetailReq {
  merchCode: string;
  acntId: number;

  constructor(merchCode: string, acntId: number) {
    this.merchCode = merchCode
    this.acntId = acntId
  }

}



export class MgCmerchGetMerchQrDetailRes {
  acntName: string;
  acntCode: string;
  qrCode: string;
  merchName: string;
  merchName2: string;
  responseCode: number;
  responseDesc: string;

  constructor(
    acntName: string,
    acntCode: string,
    qrCode: string,
    merchName: string,
    merchName2: string,
    responseCode: number,
    responseDesc: string
  ) {
    this.acntName = acntName
    this.acntCode = acntCode
    this.qrCode = qrCode
    this.merchName = merchName
    this.merchName2 = merchName2
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}
