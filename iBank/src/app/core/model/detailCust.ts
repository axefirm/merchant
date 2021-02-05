export class MgCustDetailCustRes  {
  custId: string;
  firstName: string;
  lastName: string;
  custType: string;
  custCode: string;
  parentCustId: string;
  registerCode: string;
  msisdn: string;
  countryCode: string;
  email: string;
  notifType: string;
  isAdminLock: number;
  isSelfSuspend: number;
  vatRegNo: string;
  vatpsUserNo: string;
  picture: string;
  status: string;
  roleId: number;
  attrLevel: number;
  admComment: string;
  sqId: number;
  sqAnswer: string;
  sqHint: string;
  createdDatetime: string;
  modifiedDatetime: string;
  pinStatus: string;
  passStatus: string;
  custName: string;
  custName2: string;
  addrDetail: string;
  addrShort: string;
  familyName: string;
  msisdnVerfStatus: string;
  emailVerfStatus: string;
  fbId: string;
  responseCode: number;
  responseDesc: string;

  constructor(
    custId: string, 
    firstName: string, 
    lastName: string, 
    custType: string, 
    custCode: string, 
    parentCustId: string, 
    registerCode: string, 
    msisdn: string, 
    countryCode: string, 
    email: string, 
    notifType: string, 
    isAdminLock: number, 
    isSelfSuspend: number, 
    vatRegNo: string, 
    vatpsUserNo: string, 
    picture: string, 
    status: string, 
    roleId: number, 
    attrLevel: number, 
    admComment: string, 
    sqId: number, 
    sqAnswer: string, 
    sqHint: string, 
    createdDatetime: string, 
    modifiedDatetime: string, 
    pinStatus: string, 
    passStatus: string, 
    custName: string, 
    custName2: string, 
    addrDetail: string, 
    addrShort: string, 
    familyName: string, 
    msisdnVerfStatus: string, 
    emailVerfStatus: string, 
    fbId: string, 
    responseCode: number, 
    responseDesc: string
) {
    this.custId = custId
    this.firstName = firstName
    this.lastName = lastName
    this.custType = custType
    this.custCode = custCode
    this.parentCustId = parentCustId
    this.registerCode = registerCode
    this.msisdn = msisdn
    this.countryCode = countryCode
    this.email = email
    this.notifType = notifType
    this.isAdminLock = isAdminLock
    this.isSelfSuspend = isSelfSuspend
    this.vatRegNo = vatRegNo
    this.vatpsUserNo = vatpsUserNo
    this.picture = picture
    this.status = status
    this.roleId = roleId
    this.attrLevel = attrLevel
    this.admComment = admComment
    this.sqId = sqId
    this.sqAnswer = sqAnswer
    this.sqHint = sqHint
    this.createdDatetime = createdDatetime
    this.modifiedDatetime = modifiedDatetime
    this.pinStatus = pinStatus
    this.passStatus = passStatus
    this.custName = custName
    this.custName2 = custName2
    this.addrDetail = addrDetail
    this.addrShort = addrShort
    this.familyName = familyName
    this.msisdnVerfStatus = msisdnVerfStatus
    this.emailVerfStatus = emailVerfStatus
    this.fbId = fbId
    this.responseCode = responseCode
    this.responseDesc = responseDesc
  }

}