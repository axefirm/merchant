export class MgCustChangeMsisdnReq {
    msisdn: string;

    constructor(msisdn: string) {
        this.msisdn = msisdn
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