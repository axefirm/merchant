export class MgCustSelectCustAccessReq {
    currentPage: number;
    pageCount: number;

    constructor(currentPage: number, pageCount: number) {
        this.currentPage = currentPage
        this.pageCount = pageCount
    }

}


export class MgCustSelectCustAccessRes {
    responseData: MgCustAccess[];
    responseCode: number;
    responseDesc: string;

    constructor(
        responseData: MgCustAccess[],
        responseCode: number,
        responseDesc: string,

    ) {
        this.responseData = responseData
        this.responseCode = responseCode
        this.responseDesc = responseDesc
    }

}

export class MgCustAccess {
    wallet: string;
    custId: string;
    deviceId: string;
    name: string;
    ip: string;
    mac: string;
    osVersion: string;
    isBlock: number;
    tryCount: number;
    lockedDatetime: string;
    accessCount: number;
    accessDate: string;
    status: string;
    statusName: string;
    statusName2: string;
    isFingerPrint: number;
    pushToken: string;
    chnlType: string;
    appVersion: number;
    isLast: number;

    constructor(
        wallet: string,
        custId: string,
        deviceId: string,
        name: string,
        ip: string,
        mac: string,
        osVersion: string,
        isBlock: number,
        tryCount: number,
        lockedDatetime: string,
        accessCount: number,
        accessDate: string,
        status: string,
        statusName: string,
        statusName2: string,
        isFingerPrint: number,
        pushToken: string,
        chnlType: string,
        appVersion: number,
        isLast: number
    ) {
        this.wallet = wallet
        this.custId = custId
        this.deviceId = deviceId
        this.name = name
        this.ip = ip
        this.mac = mac
        this.osVersion = osVersion
        this.isBlock = isBlock
        this.tryCount = tryCount
        this.lockedDatetime = lockedDatetime
        this.accessCount = accessCount
        this.accessDate = accessDate
        this.status = status
        this.statusName = statusName
        this.statusName2 = statusName2
        this.isFingerPrint = isFingerPrint
        this.pushToken = pushToken
        this.chnlType = chnlType
        this.appVersion = appVersion
        this.isLast = isLast
    }

}