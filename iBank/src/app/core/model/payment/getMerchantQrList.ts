export class MgCmerchGetMerchQrListReq {
  merchCode: string;

  constructor(merchCode: string) {
    this.merchCode = merchCode
  }

}

export class MgCmerchGetMerchQrListRes {
  responseData: MgCmerchGetListData[];
  responseCode: number;
  responseDesc: string;

  constructor(responseData: MgCmerchGetListData[], responseCode: number, responseDesc: string) {
    this.responseData = responseData
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}

export class MgCmerchGetListData {
  acntName: string;
  acntCode: string;
  qrCode: string;
  posCode: string;

  constructor(
    acntName: string,
    acntCode: string,
    qrCode: string,
    posCode: string
  ) {
    this.acntName = acntName
    this.acntCode = acntCode
    this.qrCode = qrCode
    this.posCode = posCode
  }

}
