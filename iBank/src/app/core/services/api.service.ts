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
import { ApiHelper } from './api-helper';
import { MgGetDicReq } from '../model/app/getDictionary';
import { MgCredChangeReq } from '../model/app/changePin';
import { MgCustChangeMsisdnReq } from '../model/app/changeMobile';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private api: HttpService) { }

  login(data: MgLoginReq) {
    return this.api.post(ApiHelper.login, data);
  }

  changePin(data: MgCredChangeReq) {
    return this.api.post(ApiHelper.changePin, data);
  }
  
  changeMsisdn(data: MgCustChangeMsisdnReq) {
    return this.api.post(ApiHelper.changeMsisdn, data);
  }

  forgetPin(data: MgCredForgetReq) {
    return this.api.post(ApiHelper.forgetPin, data);
  }

  getDictionary(data: string) {
    const req = new MgGetDicReq(data);
    return this.api.post(ApiHelper.getDictionary, req);
  }

  // enquire
  checkUnreadSmart(data: MgCmerchCheckUnreadSmartReq) {
    return this.api.postMerch(ApiHelper.checkUnreadSmart, data);
  }

  getAcntDetail(data: MgCmerchInqAcntDetailReq) {
    return this.api.postMerch(ApiHelper.getAcntDetail, data);
  }

  getAcntQrDetail(data: MgCmerchGetMerchQrDetailReq) {
    return this.api.postMerch(ApiHelper.getAcntQrDetail, data);
  }

  getLoyaltyAcntBal(data: MgCmerchInqLoyaltyAcntBalReq) {
    return this.api.postMerch(ApiHelper.getLoyaltyAcntBal, data);
  }
  getMerchAcntList(data: MgCmerchInqAcntListReq) {
    return this.api.postMerch(ApiHelper.getMerchAcntList, data);
  }

  getMerchAcntStmt(data: MgCmerchInqAcntStmtReq) {
    return this.api.postMerch(ApiHelper.getMerchAcntStmt, data);
  }
  getMerchAcntStmtX(data: MgCmerchInqAcntStmtXReq) {
    return this.api.postMerch(ApiHelper.getMerchAcntStmtX, data);
  }
  getTranRefReport(data: MgCmerchGetTranRefReportReq) {
    return this.api.postMerch(ApiHelper.getTranRefReport, data);
  }
  readMerchSmartNotif(data: MgCmerchReadSmartNotifReq) {
    return this.api.postMerch(ApiHelper.readMerchSmartNotif, data);
  }
  selectMerchActivity(data: MgCmerchActivityListReq) {
    return this.api.postMerch(ApiHelper.selectMerchActivity, data);
  }

  // Online user registration
  addMembIntoMerch(data: MgCmerchAddMembIntoMerchReq) {
    return this.api.postMerch(ApiHelper.addMembIntoMerch, data);
  }
  createMerchAcnt(data: MgCmerchCreateMerchAcntReq) {
    return this.api.postMerch(ApiHelper.createMerchAcnt, data);
  }
  enrollMerch(data: MgCmerchEnrollMerchReq) {
    return this.api.postMerch(ApiHelper.enrollMerch, data);
  }
  regMerch(data: MgCmerchRegMerchReq) {
    return this.api.postMerch(ApiHelper.regMerch, data);
  }
  startEnrollByMerch(data: MgCmerchStartEnrollByMerchReq) {
    return this.api.postMerch(ApiHelper.startEnrollByMerch, data);
  }
  verifyLoginCode(data: MgCmerchVerifyLoginCodeReq) {
    return this.api.postMerch(ApiHelper.verifyLoginCode, data);
  }
  //payment
  createMerchantPos(data: MgCmerchCreatePosReq) {
    return this.api.postMerch(ApiHelper.createMerchantPos, data);
  }
  deleteMerchantPos(data: MgCmerchDeletePosReq) {
    return this.api.postMerch(ApiHelper.deleteMerchantPos, data);
  }
  getCashFlow(data: MgCmerchCashFlowReq) {
    return this.api.postMerch(ApiHelper.getCashFlow, data);
  }
  getMerchantQrList(data: MgCmerchGetMerchQrListReq) {
    return this.api.postMerch(ApiHelper.getMerchantQrList, data);
  }
  getMerchCust(data: MgCmerchGetMerchCustReq) {
    return this.api.postMerch(ApiHelper.getMerchCust, data);
  }
  getMerchReg(data: MgCmerchGetMerchRegReq) {
    return this.api.postMerch(ApiHelper.getMerchReg, data);
  }
  selectMerchCust(data: MgCmerchSelectMerchCustReq) {
    return this.api.postMerch(ApiHelper.selectMerchCust, data);
  }
  sendMerchPosReq(data: MgCmerchCashFlowReq) {
    return this.api.postMerch(ApiHelper.sendMerchPosReq, data);
  }

  verifyMerchant(data: MgCmerchGetMerchVerfReq) {
    return this.api.postMerch(ApiHelper.verifyMerchant, data);
  }
  //transaction
  initTxn(data: MgCmerchInitTxnReq) {
    return this.api.postMerch(ApiHelper.initTxn, data);
  }
  selectPendTxns(data: MgCmerchSelectPendTxnsReq) {
    return this.api.postMerch(ApiHelper.selectPendTxns, data);
  }
  updatePendTxn(data: MgCmerchUpdateTxnPendReq) {
    return this.api.postMerch(ApiHelper.updatePendTxn, data);
  }
}
