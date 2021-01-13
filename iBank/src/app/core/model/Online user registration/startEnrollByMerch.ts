export class MgCmerchStartEnrollByMerchReq {
  wallet: string;
  mobileNo: string;
  regNo: string;
  fname: string;
  lname: string;

  constructor(
    wallet: string,
    mobileNo: string,
    regNo: string,
    fname: string,
    lname: string
  ) {
    this.wallet = wallet
    this.mobileNo = mobileNo
    this.regNo = regNo
    this.fname = fname
    this.lname = lname
  }

}

export class MgCmerchStartEnrollByMerchRes {
  enrollId: number;
  custId: string;
  loginName: string;
  responseCode: number;
  responseDesc: string;

  constructor(
    enrollId: number,
    custId: string,
    loginName: string,
    responseCode: number,
    responseDesc: string
  ) {
    this.enrollId = enrollId
    this.custId = custId
    this.loginName = loginName
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}
