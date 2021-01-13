

export class MgCmerchInqAcntStmtXReq {
  merchCode: string;
  acntId: number;
  startDate: string;
  endDate: string;
  currentPage: number;
  pageCount: number;
  selectionType: string;

  constructor(
    merchCode: string,
    acntId: number,
    startDate: string,
    endDate: string,
    currentPage: number,
    pageCount: number,
    selectionType: string
  ) {
    this.merchCode = merchCode
    this.acntId = acntId
    this.startDate = startDate
    this.endDate = endDate
    this.currentPage = currentPage
    this.pageCount = pageCount
    this.selectionType = selectionType
  }

}

export class MgCmerchInqAcntStmtRes {
  responseData: MgCmerchInqAcntStmtData[];
  acntCode: string;
  acntName: string;
  acntName2: string;
  curCode: string;
  fiCode: string;
  fiName: string;
  fiName2: string;
  totalRecord: number;
  pageSize: number;
  pageNumber: number;
  currentDataSize: number;
  responseCode: number;
  responseDesc: string;

  constructor(
    responseData: MgCmerchInqAcntStmtData[],
    acntCode: string,
    acntName: string,
    acntName2: string,
    curCode: string,
    fiCode: string,
    fiName: string,
    fiName2: string,
    totalRecord: number,
    pageSize: number,
    pageNumber: number,
    currentDataSize: number,
    responseCode: number,
    responseDesc: string
  ) {
    this.responseData = responseData
    this.acntCode = acntCode
    this.acntName = acntName
    this.acntName2 = acntName2
    this.curCode = curCode
    this.fiCode = fiCode
    this.fiName = fiName
    this.fiName2 = fiName2
    this.totalRecord = totalRecord
    this.pageSize = pageSize
    this.pageNumber = pageNumber
    this.currentDataSize = currentDataSize
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}

export class MgCmerchInqAcntStmtData {
  txnDate: string;
  jrNo: number;
  jritemNo: number;
  txnCode: string;
  credit: number;
  debit: number;
  balance: number;
  txnDesc: string;
  postDate: string;
  isFee: number;

  constructor(
    txnDate: string,
    jrNo: number,
    jritemNo: number,
    txnCode: string,
    credit: number,
    debit: number,
    balance: number,
    txnDesc: string,
    postDate: string,
    isFee: number
  ) {
    this.txnDate = txnDate
    this.jrNo = jrNo
    this.jritemNo = jritemNo
    this.txnCode = txnCode
    this.credit = credit
    this.debit = debit
    this.balance = balance
    this.txnDesc = txnDesc
    this.postDate = postDate
    this.isFee = isFee
  }

}
