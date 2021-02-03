import { Optional } from "@angular/core";

export class MgCustChangeMsisdnReq {
    msisdn: string;

    constructor(msisdn: string) {
        this.msisdn = msisdn;
    }
}

export class MgCustVerifyRes {
    responseCode: number;
    responseDesc: string;
    verifyType: string;
    constructor(responseCode: number, responseDesc: string, verifyType: string) {
        this.responseCode = responseCode;
        this.responseDesc = responseDesc;
        this.verifyType = verifyType;
    }
}