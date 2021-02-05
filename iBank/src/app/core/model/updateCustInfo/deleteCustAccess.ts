export class MgCustDeleteCustAccessReq{
  deviceId: string;

  constructor(deviceId: string) {
    this.deviceId = deviceId
  }
}


export class MgCustMainRes  {
  responseCode: number;

  constructor(responseCode: number, responseDesc: string) {
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }
  responseDesc: string;
}