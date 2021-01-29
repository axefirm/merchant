export class MgCmerchEnrollMerchReq {
  name: string;
  registerCode: string;
  orgCustId: string;
  merchType: string;
  orgTypeId: number;
  chnlType: string;

  constructor(
    name: string,
    registerCode: string,
    orgCustId: string,
    merchType: string,
    chnlType: string
  ) {
    this.name = name
    this.registerCode = registerCode
    this.orgCustId = orgCustId
    this.merchType = merchType
    this.chnlType = chnlType
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
