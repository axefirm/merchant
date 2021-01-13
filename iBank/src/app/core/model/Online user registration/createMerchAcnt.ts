export class MgCmerchCreateMerchAcntReq {
  merchCode: string;

  constructor(merchCode: string) {
    this.merchCode = merchCode
  }

}

export class MgCmerchCreateMerchAcntRes {
  merchCode: string;
  fiCode: string;
  acntCode: string;
  acntType: string;
  curCode: string;
  acntName: string;
  responseCode: number;
  responseDesc: string;

  constructor(
    merchCode: string,
    fiCode: string,
    acntCode: string,
    acntType: string,
    curCode: string,
    acntName: string,
    responseCode: number,
    responseDesc: string
  ) {
    this.merchCode = merchCode
    this.fiCode = fiCode
    this.acntCode = acntCode
    this.acntType = acntType
    this.curCode = curCode
    this.acntName = acntName
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }
}
