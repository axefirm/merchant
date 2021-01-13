
export class MgCmerchReadSmartNotifReq {
    custId: string;
    recIds: number[];
    refnos: number[];

    constructor(custId: string, recIds: number[], refnos: number[]) {
        this.custId = custId
        this.recIds = recIds
        this.refnos = refnos
    }
}

export class MgCmerchMainRes {
    responseCode: number;
    responseDesc: string;

    constructor(responseCode: number, responseDesc: string) {
        this.responseCode = responseCode
        this.responseDesc = responseDesc
    }

}
