export class  MgCmerchGetMerchVerifyReq  {
  merchCode: string;

  constructor(merchCode: string) {
    this.merchCode = merchCode
  }

}

export class  MgCmerchGetMerchVerifyRes  {
  verfType: string;
  address: string;
  date: string;
  time: string;
  responseCode: number;
  responseDesc: string;

  constructor(
    verfType: string, 
    address: string, 
    date: string, 
    time: string, 
    responseCode: number, 
    responseDesc: string
) {
    this.verfType = verfType
    this.address = address
    this.date = date
    this.time = time
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}