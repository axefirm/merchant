export class MgCmerchDeleteMerchCustReq  {
  merchCode: string;
  custId: string;

  constructor(merchCode: string, custId: string) {
    this.merchCode = merchCode
    this.custId = custId
  }
}

export class  MgCmerchMainRes  {
  responseCode: number;
  responseDesc: string;

  constructor(responseCode: number, responseDesc: string) {
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}