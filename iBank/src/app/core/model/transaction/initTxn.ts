export class MgCmerchInitTxnReq {
    merchCode: string;
    pin: string;
    operCode: string;
    srcAcntId: number;
    dstAcntId: number;
    amt: number;
    cur: string;
    desc: string;
    dstMsisdn: string;
    dstFiCode: string;
    dstAcntCode: string;
    dstAcntCur: string;
    dstAcntName: string;
    constructor(
        // merchCode: string,
        // pin: string,
        // operCode: string,
        // srcAcntId: number,
        // dstAcntId: number,
        // amt: number,
        // cur: string,
        // desc: string,
        // dstMsisdn: string,
        // dstFiCode: string,
        // dstAcntCode: string,
        // dstAcntCur: string,
        // dstAcntName: string
    ) {
        // this.merchCode = merchCode
        // this.pin = pin
        // this.operCode = operCode
        // this.srcAcntId = srcAcntId
        // this.dstAcntId = dstAcntId
        // this.amt = amt
        // this.cur = cur
        // this.desc = desc
        // this.dstMsisdn = dstMsisdn
        // this.dstFiCode = dstFiCode
        // this.dstAcntCode = dstAcntCode
        // this.dstAcntCur = dstAcntCur
        // this.dstAcntName = dstAcntName
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
