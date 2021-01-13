export class MgCmerchCashFlowReq {
  merchCode: string;
  acntId: number;
  dateBy: string;

  constructor(merchCode: string, acntId: number, dateBy: string) {
    this.merchCode = merchCode
    this.acntId = acntId
    this.dateBy = dateBy
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
