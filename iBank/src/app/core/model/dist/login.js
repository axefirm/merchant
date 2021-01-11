"use strict";
exports.__esModule = true;
exports.MgLoginRes = exports.MgLoginReq = void 0;
var MgLoginReq = /** @class */ (function () {
    function MgLoginReq($loginCode, $custCredValue, $deviceId, $deviceName, $deviceIp, $deviceMac, $osType, $osVersion, $appVersion, $lang, $isReLogin, $biometricFlag, $pushToken, $traceNo, $latitude, $longitude, $isLite, $tanCounter) {
        this.loginCode = $loginCode;
        this.custCredValue = $custCredValue;
        this.deviceId = $deviceId;
        this.deviceName = $deviceName;
        this.deviceIp = $deviceIp;
        this.deviceMac = $deviceMac;
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
    return MgLoginReq;
}());
exports.MgLoginReq = MgLoginReq;
var MgLoginRes = /** @class */ (function () {
    function MgLoginRes() {
    }
    return MgLoginRes;
}());
exports.MgLoginRes = MgLoginRes;
