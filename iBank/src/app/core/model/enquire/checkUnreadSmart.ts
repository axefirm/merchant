export class MgCmerchCheckUnreadSmartReq {
    custId: string;

    constructor(custId: string) {
        this.custId = custId
    }
}

export class MgCmerchCheckUnreadSmartRes {
    unread: boolean;
    responseCode: number;
    responseDesc: string;

    constructor(unread: boolean, responseCode: number, responseDesc: string) {
        this.unread = unread
        this.responseCode = responseCode
        this.responseDesc = responseDesc
    }

}
