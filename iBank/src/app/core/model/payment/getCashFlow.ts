
export class MgCmerchCashFlowReq {
  merchCode: string;
  acntId: number;
  dateBy: string;

  constructor(merchCode: string, acntId: number, dateBy: string) {
    this.merchCode = merchCode
    this.acntId = acntId
    this.dateBy = dateBy
  }

}

export class MgCmerchCashFlowRes {
  totalIncome: number;
  totalExpense: number;
  incomeList: MgCmerchCashFlowData;
  expenseList: MgCmerchCashFlowData;
  responseCode: number;
  responseDesc: string;

  constructor(
    totalIncome: number,
    totalExpense: number,
    incomeList: MgCmerchCashFlowData,
    expenseList: MgCmerchCashFlowData,
    responseCode: number,
    responseDesc: string
  ) {
    this.totalIncome = totalIncome
    this.totalExpense = totalExpense
    this.incomeList = incomeList
    this.expenseList = expenseList
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}

export class MgCmerchCashFlowData {
  type: string;
  data: string[];

  constructor(type: string, data: string[]) {
    this.type = type
    this.data = data
  }

}


