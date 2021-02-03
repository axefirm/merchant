export class MgCmerchGetMerchVerfReq {
  payeeCode: string;
  verifyType: string;
  location: string;
  date: string;
  time: string;

  constructor(
    payeeCode: string,
    verifyType: string,
    location: string,
    date: string,
    time: string
  ) {
    this.payeeCode = payeeCode;
    this.verifyType = verifyType;
    this.location = location;
    this.date = date;
    this.time = time;
  }
}
