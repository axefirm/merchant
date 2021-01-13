export class MgCmerchSelectMerchCustReq {
  merchCode: string;

  constructor(merchCode: string) {
    this.merchCode = merchCode
  }

}

export class MgCmerchSelectMerchCustRes {
  custs: MgCmerchMerchCust[];
  responseCode: number;
  responseDesc: string;

  constructor(custs: MgCmerchMerchCust[], responseCode: number, responseDesc: string) {
    this.custs = custs
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}

export class MgCmerchMerchCust {
  merchCode: string;
  merchName: string;
  custId: string;
  custName: string;
  wallet: string;
  walletName: string;
  roleId: number;
  roleName: string;
  isSv: number;
  isInitiator: number;
  createdDatetime: string;
  modifiedDatetime: string;

  constructor(
    merchCode: string,
    merchName: string,
    custId: string,
    custName: string,
    wallet: string,
    walletName: string,
    roleId: number,
    roleName: string,
    isSv: number,
    isInitiator: number,
    createdDatetime: string,
    modifiedDatetime: string
  ) {
    this.merchCode = merchCode
    this.merchName = merchName
    this.custId = custId
    this.custName = custName
    this.wallet = wallet
    this.walletName = walletName
    this.roleId = roleId
    this.roleName = roleName
    this.isSv = isSv
    this.isInitiator = isInitiator
    this.createdDatetime = createdDatetime
    this.modifiedDatetime = modifiedDatetime
  }

}
