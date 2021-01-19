import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { MgLoginReq } from '../model/login';
import { MgCredForgetReq } from '../model/forgetPin';
import { MgCmerchCheckUnreadSmartReq } from '../model/enquire/checkUnreadSmart';
import { MgCmerchInqAcntDetailReq } from '../model/enquire/getAcntDetail';
import { MgCmerchGetMerchQrDetailReq } from '../model/enquire/getAcntQrDetail';
import { MgCmerchInqLoyaltyAcntBalReq } from '../model/enquire/getLoyaltyAcntBal';
import { MgCmerchInqAcntListReq } from '../model/enquire/getMerchAcntList';
import { MgCmerchInqAcntStmtXReq } from '../model/enquire/getMerchAcntStmtX';
import { MgCmerchInqAcntStmtReq } from '../model/enquire/getMerchAcntStmt';
import { MgCmerchGetTranRefReportReq } from '../model/enquire/getTranRefReport';
import { MgCmerchReadSmartNotifReq } from '../model/enquire/readMerchSmartNotif';
import { MgCmerchActivityListReq } from '../model/enquire/selectMerchActivity';
import { MgCmerchAddMembIntoMerchReq } from '../model/Online user registration/addMembIntoMerch';
import { MgCmerchCreateMerchAcntReq } from '../model/Online user registration/createMerchAcnt';
import { MgCmerchEnrollMerchReq } from '../model/Online user registration/enrollMerch';
import { MgCmerchRegMerchReq } from '../model/Online user registration/regMerch';
import { MgCmerchStartEnrollByMerchReq } from '../model/Online user registration/startEnrollByMerch';
import { MgCmerchVerifyLoginCodeReq } from '../model/Online user registration/verifyLoginCode';
import { MgCmerchCreatePosReq } from '../model/payment/createMerchantPos';
import { MgCmerchDeletePosReq } from '../model/payment/deleteMerchantPos';
import { MgCmerchCashFlowReq } from '../model/payment/getCashFlow';
import { MgCmerchGetMerchQrListReq } from '../model/payment/getMerchantQrList';
import { MgCmerchGetMerchCustReq } from '../model/payment/getMerchCust';
import { MgCmerchGetMerchRegReq } from '../model/payment/getMerchReg';
import { MgCmerchSelectMerchCustReq } from '../model/payment/selectMerchCus';
import { MgCmerchGetMerchVerfReq } from '../model/payment/verifyMerchant';
import { MgCmerchInitTxnReq } from '../model/transaction/initTxn';
import { MgCmerchSelectPendTxnsReq } from '../model/transaction/selectPendTxns';
import { MgCmerchUpdateTxnPendReq } from '../model/transaction/updatePendTxn';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private api: HttpService) { }

  login(data: MgLoginReq) {
    return this.api.post('login', data);
  }

  forgetPin(data: MgCredForgetReq) {
    return this.api.post('forgetPin', data);
  }
  // enquire
  checkUnreadSmart(data: MgCmerchCheckUnreadSmartReq) {
    return this.api.post('checkUnreadSmart', data);
  }
  getAcntDetail(data: MgCmerchInqAcntDetailReq) {
    return this.api.post('getAcntDetail', data);
  }
  getAcntQrDetail(data: MgCmerchGetMerchQrDetailReq) {
    return this.api.post('getAcntQrDetail', data);
  }
  // MgCmerchInqLoyaltyAcntBalReq

  getLoyaltyAcntBal(data: MgCmerchInqLoyaltyAcntBalReq) {
    return this.api.post('getLoyaltyAcntBal', data);
  }
  getMerchAcntList(data: MgCmerchInqAcntListReq) {
    return this.api.post('getMerchAcntList', data);
  }

  getMerchAcntStmt(data: MgCmerchInqAcntStmtReq) {
    return this.api.post('getMerchAcntStmt', data);
  }
  getMerchAcntStmtX(data: MgCmerchInqAcntStmtXReq) {
    return this.api.post('getMerchAcntStmtX', data);
  }
  getTranRefReport(data: MgCmerchGetTranRefReportReq) {
    return this.api.post('getTranRefReport', data);
  }
  readMerchSmartNotif(data: MgCmerchReadSmartNotifReq) {
    return this.api.post('readMerchSmartNotif', data);
  }
  selectMerchActivity(data: MgCmerchActivityListReq) {
    return this.api.post('selectMerchActivity', data);
  }

  // Online user registration
  addMembIntoMerch(data: MgCmerchAddMembIntoMerchReq) {
    return this.api.post('addMembIntoMerch', data);
  }
  createMerchAcnt(data: MgCmerchCreateMerchAcntReq) {
    return this.api.post('createMerchAcnt', data);
  }
  enrollMerch(data: MgCmerchEnrollMerchReq) {
    return this.api.post('enrollMerch', data);
  }
  regMerch(data: MgCmerchRegMerchReq) {
    return this.api.post('regMerch', data);
  }
  startEnrollByMerch(data: MgCmerchStartEnrollByMerchReq) {
    return this.api.post('startEnrollByMerch', data);
  }
  verifyLoginCode(data: MgCmerchVerifyLoginCodeReq) {
    return this.api.post('verifyLoginCode', data);
  }
  //payment
  createMerchantPos(data: MgCmerchCreatePosReq) {
    return this.api.post('createMerchantPos', data);
  }
  deleteMerchantPos(data: MgCmerchDeletePosReq) {
    return this.api.post('deleteMerchantPos', data);
  }
  getCashFlow(data: MgCmerchCashFlowReq) {
    return this.api.post('getCashFlow', data);
  }
  getMerchantQrList(data: MgCmerchGetMerchQrListReq) {
    return this.api.post('getMerchantQrList', data);
  }
  getMerchCust(data: MgCmerchGetMerchCustReq) {
    return this.api.post('getMerchCust', data);
  }
  getMerchReg(data: MgCmerchGetMerchRegReq) {
    return this.api.post('getMerchReg', data);
  }
  selectMerchCus(data: MgCmerchSelectMerchCustReq) {
    return this.api.post('selectMerchCus', data);
  }
  sendMerchPosReq(data: MgCmerchCashFlowReq) {
    return this.api.post('sendMerchPosReq', data);
  }

  verifyMerchant(data: MgCmerchGetMerchVerfReq) {
    return this.api.post('verifyMerchant', data);
  }
  //transaction
  initTxn(data: MgCmerchInitTxnReq) {
    return this.api.post('initTxn', data);
  }
  selectPendTxns(data: MgCmerchSelectPendTxnsReq) {
    return this.api.post('selectPendTxns', data);
  }
  updatePendTxn(data: MgCmerchUpdateTxnPendReq) {
    return this.api.post('updatePendTxn', data);
  }
}
