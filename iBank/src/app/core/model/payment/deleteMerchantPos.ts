export class MgCmerchDeletePosReq {
  merchCode: string;
  acntId: number;
  posCode: string;

  constructor(merchCode: string, acntId: number, posCode: string) {
    this.merchCode = merchCode
    this.acntId = acntId
    this.posCode = posCode
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


