export class MgCmerchVerifyLoginCodeReq {
    enrollId: number;
    tan: string;

    constructor(enrollId: number, tan: string) {
        this.enrollId = enrollId
        this.tan = tan
    }

}

export class MgCmerchVerifyLoginCodeRes {
    custId: string;
    responseCode: number;
    responseDesc: string;

    constructor(custId: string, responseCode: number, responseDesc: string) {
        this.custId = custId
        this.responseCode = responseCode
        this.responseDesc = responseDesc
    }

}

