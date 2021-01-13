
export class MgCmerchSelectPendTxnsReq {

    constructor(merchCode: string) {
        this.merchCode = merchCode
    }
    merchCode: string;
}


export class MgCmerchSelectPendTxnsRes {

    txns: MgCmerchPendTxn[];
    responseCode: number;
    responseDesc: string;

    constructor(txns: MgCmerchPendTxn[], responseCode: number, responseDesc: string) {
        this.txns = txns
        this.responseCode = responseCode
        this.responseDesc = responseDesc
    }
}

export class MgCmerchPendTxn {
    pendId: number;
    merchCode: string;
    operCode: string;
    operType: string;
    operName: string;
    dstFiCode: string;
    dstFiName: string;
    dstAcntName: string;
    txnAmt: number;
    txnCur: string;
    srcAcntId: number;
    acntCode: string;
    txnDesc: string;
    initCustId: string;
    initCustName: string;
    initDatetime: string;

    constructor(
        pendId: number,
        merchCode: string,
        operCode: string,
        operType: string,
        operName: string,
        dstFiCode: string,
        dstFiName: string,
        dstAcntName: string,
        txnAmt: number,
        txnCur: string,
        srcAcntId: number,
        acntCode: string,
        txnDesc: string,
        initCustId: string,
        initCustName: string,
        initDatetime: string
    ) {
        this.pendId = pendId
        this.merchCode = merchCode
        this.operCode = operCode
        this.operType = operType
        this.operName = operName
        this.dstFiCode = dstFiCode
        this.dstFiName = dstFiName
        this.dstAcntName = dstAcntName
        this.txnAmt = txnAmt
        this.txnCur = txnCur
        this.srcAcntId = srcAcntId
        this.acntCode = acntCode
        this.txnDesc = txnDesc
        this.initCustId = initCustId
        this.initCustName = initCustName
        this.initDatetime = initDatetime
    }

}

