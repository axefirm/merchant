
export class MgCmerchCreatePosReq {
  merchCode: string;
  name: string;
  msisdn: string;
  email: string;
  notifType: string;
  catId: number;
  acntId: number;

  constructor(
    merchCode: string,
    name: string,
    msisdn: string,
    email: string,
    notifType: string,
    catId: number,
    acntId: number
  ) {
    this.merchCode = merchCode
    this.name = name
    this.msisdn = msisdn
    this.email = email
    this.notifType = notifType
    this.catId = catId
    this.acntId = acntId
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

