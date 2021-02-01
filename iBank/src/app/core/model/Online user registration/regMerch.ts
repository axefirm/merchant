export class MgCmerchRegMerchReq {
  merchCode: string;
  icon: string;
  name: string;
  orgTypeId: number;
  registerCode: string;
  address: string;
  msisdn: string;
  phone: string;
  email: string;
  notifType: string;
  isVatPayer: number;

  constructor(
    // merchCode: string,
    // icon: string,
    // name: string,
    // orgTypeId: number,
    // registerCode: string,
    // address: string,
    // msisdn: string,
    // phone: string,
    // email: string,
    // notifType: string,
    // isVatPayer: number
  ) {
    // this.merchCode = merchCode
    // this.icon = icon
    // this.name = name
    // this.orgTypeId = orgTypeId
    // this.registerCode = registerCode
    // this.address = address
    // this.msisdn = msisdn
    // this.phone = phone
    // this.email = email
    // this.notifType = notifType
    // this.isVatPayer = isVatPayer
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
