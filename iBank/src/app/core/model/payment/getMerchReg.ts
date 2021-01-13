export class MgCmerchGetMerchRegReq {
  merchCode: string;

  constructor(merchCode: string) {
    this.merchCode = merchCode
  }
}

export class MgCmerchGetMerchRegRes {
  merchCode: string;
  merchName: string;
  custCode: string;
  custName: string;
  isOrg: number;
  orgTypeId: number;
  orgTypeName: string;
  registerCode: string;
  address: string;
  isVatPayer: number;
  msisdn: string;
  phone: string;
  email: string;
  notifType: string;
  verfStatus: string;
  verfStatusName: string;
  responseCode: number;
  responseDesc: string;

  constructor(
    merchCode: string,
    merchName: string,
    custCode: string,
    custName: string,
    isOrg: number,
    orgTypeId: number,
    orgTypeName: string,
    registerCode: string,
    address: string,
    isVatPayer: number,
    msisdn: string,
    phone: string,
    email: string,
    notifType: string,
    verfStatus: string,
    verfStatusName: string,
    responseCode: number,
    responseDesc: string
  ) {
    this.merchCode = merchCode
    this.merchName = merchName
    this.custCode = custCode
    this.custName = custName
    this.isOrg = isOrg
    this.orgTypeId = orgTypeId
    this.orgTypeName = orgTypeName
    this.registerCode = registerCode
    this.address = address
    this.isVatPayer = isVatPayer
    this.msisdn = msisdn
    this.phone = phone
    this.email = email
    this.notifType = notifType
    this.verfStatus = verfStatus
    this.verfStatusName = verfStatusName
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}

