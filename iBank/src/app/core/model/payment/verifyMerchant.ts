export class MgCmerchGetMerchVerfReq {
  payeeCode: string;
  verifyType: string;
  location: string;
  date: string;
  time: string;

  constructor(
    payeeCode: string,
    verifyType: string,
    location: string,
    date: string,
    time: string
  ) {
    this.payeeCode = payeeCode
    this.verifyType = verifyType
    this.location = location
    this.date = date
    this.time = time
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
