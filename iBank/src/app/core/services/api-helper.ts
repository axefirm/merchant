export class ApiHelper {
    // 
    //App api related
    // 

    // Login related
    public static login: string = 'login';

    public static changePin: string = 'changePin';

    public static changeMsisdn: string = 'changeMsisdn';

    public static forgetPin: string = 'forgetPin';

    public static getDictionary: string = 'getDictionary';

    // customer info 

    public static detailCust: string = 'detailCust';

    public static changeEmail: string = 'changeEmail';

    public static updateCust: string = 'updateCust';

    public static selectCustAccess: string = 'selectCustAccess';

    public static deleteCustAccess: string = 'deleteCustAccess';


    // 
    //Merchant api related

    // enquire 
    public static checkUnreadSmart: string = 'checkUnreadSmart';

    public static getAcntDetail: string = 'getAcntDetail';

    public static getAcntQrDetail: string = 'getAcntQrDetail';

    public static getLoyaltyAcntBal: string = 'getLoyaltyAcntBal';

    public static getMerchAcntList: string = 'getMerchAcntList';

    public static getMerchAcntStmt: string = 'getMerchAcntStmt';

    public static getMerchAcntStmtX: string = 'getMerchAcntStmtX';

    public static getTranRefReport: string = 'getTranRefReport';

    public static readMerchSmartNotif: string = 'readMerchSmartNotif';

    public static selectMerchActivity: string = 'selectMerchActivity';

    // Online user registration
    public static addMembIntoMerch: string = 'addMembIntoMerch';

    public static createMerchAcnt: string = 'createMerchAcnt';

    public static enrollMerch: string = 'enrollMerch';

    public static regMerch: string = 'regMerch';

    public static startEnrollByMerch: string = 'startEnrollByMerch';

    public static verifyLoginCode: string = 'verifyLoginCode';

    //payment
    public static createMerchantPos: string = 'createMerchantPos';

    public static deleteMerchantPos: string = 'deleteMerchantPos';

    public static getCashFlow: string = 'getCashFlow';

    public static getMerchantQrList: string = 'getMerchantQrList';

    public static getMerchCust: string = 'getMerchCust';

    public static getMerchReg: string = 'getMerchReg';

    public static selectMerchCust: string = 'selectMerchCust';

    public static sendMerchPosReq: string = 'sendMerchPosReq';

    public static verifyMerch: string = 'verifyMerch';

    public static getMerchVerify: string = 'getMerchVerify';

    public static deleteMerchCust: string = 'deleteMerchCust';


    //transaction
    public static initTxn: string = 'initTxn';

    public static selectPendTxns: string = 'selectPendTxns';

    public static updatePendTxn: string = 'updatePendTxn';

}