
export class MgCredForgetReq {
    wallet:       string;
    loginCode:    string;
    registerCode: string;
    deviceId:     string;
    chnlType:     string;
    sqId:         number;
    sqAnswer:     string;

  constructor(
    wallet:       string, 
    loginCode:    string, 
    registerCode: string, 
    deviceId:     string, 
    chnlType:     string, 
    sqId:         number, 
    sqAnswer:     string
) {
    this.wallet = wallet
    this.loginCode = loginCode
    this.registerCode = registerCode
    this.deviceId = deviceId
    this.chnlType = chnlType
    this.sqId = sqId
    this.sqAnswer = sqAnswer
  }

}
