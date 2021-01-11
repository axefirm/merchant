export class MgLoginReq {

    constructor($loginCode: string, $custCredValue: string, $deviceId: string, $deviceName: string, $deviceIp: string, $deviceMac: string, $chnlType: string, $osType: string, $osVersion: string, $appVersion: number, $lang: string, $isReLogin: number, $biometricFlag: number, $pushToken: string, $traceNo: string, $latitude: number, $longitude: number, $isLite: number, $tanCounter: string) {
        this.loginCode = $loginCode;
        this.custCredValue = $custCredValue;
        this.deviceId = $deviceId;
        this.deviceName = $deviceName;
        this.deviceIp = $deviceIp;
        this.deviceMac = $deviceMac;
        this.chnlType = $chnlType;
        this.osType = $osType;
        this.osVersion = $osVersion;
        this.appVersion = $appVersion;
        this.lang = $lang;
        this.isReLogin = $isReLogin;
        this.biometricFlag = $biometricFlag;
        this.pushToken = $pushToken;
        this.traceNo = $traceNo;
        this.latitude = $latitude;
        this.longitude = $longitude;
        this.isLite = $isLite;
        this.tanCounter = $tanCounter;
    }

    public chnlType: string;
    public loginCode: string;
    public custCredValue: string;
    public deviceId: string;
    public deviceName: string;
    public deviceIp: string;
    public deviceMac: string;
    public osType: string;
    public osVersion: string;
    public appVersion: number;
    public lang: string;
    public isReLogin: number;
    public biometricFlag: number;
    public pushToken: string;
    public traceNo: string;
    public latitude: number;
    public longitude: number;
    public isLite: number;
    public tanCounter: string;
}


export class MgLoginRes {

    constructor() {
    }
    public responseCode: number;
    public responseDesc: string;
    public sessionId: string;
    public custId: string;
    public custName: string;
    public email: string;
    public mobile: string;
    public lastAccessDatetime: string;
    public lastAccessDeviceIp: string;
    public lastAccessDeviceName: string;
    public clearPush: number;
    public vatUserNo: string;
    public fbAppId: string;
    public picture: string;
    public isLoggedInFp: number;
    public faqIdFp: string;
    public credStatus: string;
    public isDuplicated: number;
    public expireTimeout: number;
    public parentCustId: string;
    public custType: string;

}