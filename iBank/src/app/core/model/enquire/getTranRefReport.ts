

export class MgCmerchGetTranRefReportReq {
  merchCode: string;
  type: string;
  channel: string;
  status: string;
  currency: string;
  senderNumber: string;
  receiverNumber: string;
  transactionNumber: string;
  startDate: string;
  endDate: string;
  currentPage: number;
  wallet: string;

  constructor(
    merchCode: string,
    type: string,
    channel: string,
    status: string,
    currency: string,
    senderNumber: string,
    receiverNumber: string,
    transactionNumber: string,
    startDate: string,
    endDate: string,
    currentPage: number,
    wallet: string
  ) {
    this.merchCode = merchCode
    this.type = type
    this.channel = channel
    this.status = status
    this.currency = currency
    this.senderNumber = senderNumber
    this.receiverNumber = receiverNumber
    this.transactionNumber = transactionNumber
    this.startDate = startDate
    this.endDate = endDate
    this.currentPage = currentPage
    this.wallet = wallet
  }
}

export class MgCmerchGetTranRefReportRes {
  responseData: MgCmerchInqAcntTranRefData[];
  totalRecord: number;
  pageSize: number;
  pageNumber: number;
  currentDataSize: number;
  responseCode: number;
  responseDesc: string;

  constructor(
    responseData: MgCmerchInqAcntTranRefData[],
    totalRecord: number,
    pageSize: number,
    pageNumber: number,
    currentDataSize: number,
    responseCode: number,
    responseDesc: string
  ) {
    this.responseData = responseData
    this.totalRecord = totalRecord
    this.pageSize = pageSize
    this.pageNumber = pageNumber
    this.currentDataSize = currentDataSize
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}

export class MgCmerchInqAcntTranRefData {
  txnId: number;
  txnDate: string;
  txnAmt: number;
  txnCur: string;
  txnDesc: string;
  chnlType: string;
  chnlTypeName: string;
  chnlTypeName2: string;
  fiCode: string;
  fiName: string;
  fiName2: string;
  fiIcon: string;
  srcFiCode: string;
  srcFiName: string;
  srcFiName2: string;
  srcFiBrief: string;
  srcFiBrief2: string;
  srcFiIcon: string;
  dstFiCode: string;
  dstFiName: string;
  dstFiName2: string;
  dstFiBrief: string;
  dstFiBrief2: string;
  dstFiIcon: string;
  srcCustId: string;
  srcCustName: string;
  srcCustName2: string;
  dstCustId: string;
  dstCustName: string;
  dstCustName2: string;
  srcAcntId: number;
  srcAcntName: string;
  srcAcntName2: string;
  srcAcntCode: string;
  dstAcntId: number;
  dstAcntName: string;
  dstAcntName2: string;
  dstAcntCode: string;
  status: string;
  statusName: string;
  statusName2: string;

  constructor(
    txnId: number,
    txnDate: string,
    txnAmt: number,
    txnCur: string,
    txnDesc: string,
    chnlType: string,
    chnlTypeName: string,
    chnlTypeName2: string,
    fiCode: string,
    fiName: string,
    fiName2: string,
    fiIcon: string,
    srcFiCode: string,
    srcFiName: string,
    srcFiName2: string,
    srcFiBrief: string,
    srcFiBrief2: string,
    srcFiIcon: string,
    dstFiCode: string,
    dstFiName: string,
    dstFiName2: string,
    dstFiBrief: string,
    dstFiBrief2: string,
    dstFiIcon: string,
    srcCustId: string,
    srcCustName: string,
    srcCustName2: string,
    dstCustId: string,
    dstCustName: string,
    dstCustName2: string,
    srcAcntId: number,
    srcAcntName: string,
    srcAcntName2: string,
    srcAcntCode: string,
    dstAcntId: number,
    dstAcntName: string,
    dstAcntName2: string,
    dstAcntCode: string,
    status: string,
    statusName: string,
    statusName2: string
  ) {
    this.txnId = txnId
    this.txnDate = txnDate
    this.txnAmt = txnAmt
    this.txnCur = txnCur
    this.txnDesc = txnDesc
    this.chnlType = chnlType
    this.chnlTypeName = chnlTypeName
    this.chnlTypeName2 = chnlTypeName2
    this.fiCode = fiCode
    this.fiName = fiName
    this.fiName2 = fiName2
    this.fiIcon = fiIcon
    this.srcFiCode = srcFiCode
    this.srcFiName = srcFiName
    this.srcFiName2 = srcFiName2
    this.srcFiBrief = srcFiBrief
    this.srcFiBrief2 = srcFiBrief2
    this.srcFiIcon = srcFiIcon
    this.dstFiCode = dstFiCode
    this.dstFiName = dstFiName
    this.dstFiName2 = dstFiName2
    this.dstFiBrief = dstFiBrief
    this.dstFiBrief2 = dstFiBrief2
    this.dstFiIcon = dstFiIcon
    this.srcCustId = srcCustId
    this.srcCustName = srcCustName
    this.srcCustName2 = srcCustName2
    this.dstCustId = dstCustId
    this.dstCustName = dstCustName
    this.dstCustName2 = dstCustName2
    this.srcAcntId = srcAcntId
    this.srcAcntName = srcAcntName
    this.srcAcntName2 = srcAcntName2
    this.srcAcntCode = srcAcntCode
    this.dstAcntId = dstAcntId
    this.dstAcntName = dstAcntName
    this.dstAcntName2 = dstAcntName2
    this.dstAcntCode = dstAcntCode
    this.status = status
    this.statusName = statusName
    this.statusName2 = statusName2
  }

}
