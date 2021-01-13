
export class MgCmerchAddMembIntoMerchReq {
    mobileNo: string;
    regNo: string;
    fname: string;
    lname: string;
    roleId: number;
    merchCode: string;

    constructor(
        mobileNo: string,
        regNo: string,
        fname: string,
        lname: string,
        roleId: number,
        merchCode: string
    ) {
        this.mobileNo = mobileNo
        this.regNo = regNo
        this.fname = fname
        this.lname = lname
        this.roleId = roleId
        this.merchCode = merchCode
    }

}

export class MgCmerchAddMembIntoMerchRes {
    custId: string;
    custName: string;
    roleId: number;
    responseCode: number;
    responseDesc: string;

    constructor(
        custId: string,
        custName: string,
        roleId: number,
        responseCode: number,
        responseDesc: string
    ) {
        this.custId = custId
        this.custName = custName
        this.roleId = roleId
        this.responseCode = responseCode
        this.responseDesc = responseDesc
    }

}
