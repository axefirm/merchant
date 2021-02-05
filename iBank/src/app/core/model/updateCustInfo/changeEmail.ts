export class MgCustChangeEmailReq {
  email: string;

  constructor(email: string) {
    this.email = email
  }
}
 
export class MgCustVerifyRes {
  verifyType: string;
  responseCode: number;
  responseDesc: string;

  constructor(verifyType: string, responseCode: number, responseDesc: string) {
    this.verifyType = verifyType
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}