export class MgGetDicReq {
    dicCode: string;
    parentCode: number;

    constructor(dicCode: string) {
        this.dicCode = dicCode;
    }

}


export class MgGetDicRes {
    responseCode: number;
    responseDesc: string;
    dicCode: string;
    version: number;
    responseData: MgLoginDicData[];

    constructor(
        responseCode: number,
        responseDesc: string,
        dicCode: string,
        version: number,
        responseData: MgLoginDicData[]
    ) {
        this.responseCode = responseCode
        this.responseDesc = responseDesc
        this.dicCode = dicCode
        this.version = version
        this.responseData = responseData
    }

}

export class MgLoginDicData {
    id: string;
    name: string;
    name2: string;
    extra: MgLoginDictExtra;
    order: number;
    parentCode: string;
    status: string;

    constructor(
        id: string,
        name: string,
        name2: string,
        extra: MgLoginDictExtra,
        order: number,
        parentCode: string,
        status: string
    ) {
        this.id = id
        this.name = name
        this.name2 = name2
        this.extra = extra
        this.order = order
        this.parentCode = parentCode
        this.status = status
    }

}

export class MgLoginDictExtra {
    diffGreenwich: string;
    num: string;
    isoCode: string;
    name: string;
    name2: string;
    charCode: string;
    isCrypto: string;
    isBase: string;
    isOnApp: string;
    icon: string;
    iconDark: string;
    payeeType: string;
    payeeCode: string;
    payeeName: string;
    payeeName2: string;
    vatSlip: string;
    vatType: string;
    vatPercent: string;
    hint: string;
    hint2: string;
    prodId: string;
    prodCode: string;
    serviceCode: string;
    amt: string;
    cur: string;
    desc: string;
    note: string;
    note2: string;
    fiType: string;
    fiCode: string;
    brief: string;
    brief2: string;
    isMember: string;
    connId: string;
    phone: string;
    logo: string;
    logoDark: string;
    logoDim: string;
    statementIntervalDay: string;
    useOnlineReg: string;
    isNeedKeyField: string;
    keyFieldType: string;
    keyFieldName: string;
    keyFieldName2: string;
    keyFieldCaption: string;
    keyFieldCaption2: string;
    typeId: string;
    zipCode: string;
    countryCode: string;
    addrCode: string;
    operType: string;
    isFullTran: string;
    isNeedTxnDesc: string;
    txnDescCaption: string;
    txnDescCaption2: string;
    isOnline: string;
    hasInvoice: string;
    payPartial: string;
    giveOrgVat: string;
    payWout: string;
    payMore: string;
    payWoutNote: string;
    payWoutNote2: string;
    custPayAllow: string;
    cityAddrCode: string;
    distAddrCode: string;
    keyFieldRegex: string;
    keyFieldMsg: string;
    keyFieldMsg2: string;
    mapType: string;
    mapTypeName: string;
    mapTypeName2: string;
    wallet: string;
    extId: string;
    longitude: string;
    latitude: string;
    address: string;
    address2: string;
    cityName: string;
    distName: string;
    timetable: string;
    timetable2: string;
    what3Words: string;
    buyCash: string;
    sellCash: string;
    buyNonCash: string;
    sellNonCash: string;
    menuCode: string;
    tokenExgUrl: string;
    headerColor: string;
    bodyColor: string;
    paymentUrl: string;
    homeUrl: string;
    flagImage: string;
    phoneNumLen: string;
    phoneNumPrefix: string;
    phoneNumMaxLen: string;
    phoneNumMinLen: string;
    isActivityTran: string;
    isTanFi: string;
    cseAllow: string;

    constructor(
        diffGreenwich: string,
        num: string,
        isoCode: string,
        name: string,
        name2: string,
        charCode: string,
        isCrypto: string,
        isBase: string,
        isOnApp: string,
        icon: string,
        iconDark: string,
        payeeType: string,
        payeeCode: string,
        payeeName: string,
        payeeName2: string,
        vatSlip: string,
        vatType: string,
        vatPercent: string,
        hint: string,
        hint2: string,
        prodId: string,
        prodCode: string,
        serviceCode: string,
        amt: string,
        cur: string,
        desc: string,
        note: string,
        note2: string,
        fiType: string,
        fiCode: string,
        brief: string,
        brief2: string,
        isMember: string,
        connId: string,
        phone: string,
        logo: string,
        logoDark: string,
        logoDim: string,
        statementIntervalDay: string,
        useOnlineReg: string,
        isNeedKeyField: string,
        keyFieldType: string,
        keyFieldName: string,
        keyFieldName2: string,
        keyFieldCaption: string,
        keyFieldCaption2: string,
        typeId: string,
        zipCode: string,
        countryCode: string,
        addrCode: string,
        operType: string,
        isFullTran: string,
        isNeedTxnDesc: string,
        txnDescCaption: string,
        txnDescCaption2: string,
        isOnline: string,
        hasInvoice: string,
        payPartial: string,
        giveOrgVat: string,
        payWout: string,
        payMore: string,
        payWoutNote: string,
        payWoutNote2: string,
        custPayAllow: string,
        cityAddrCode: string,
        distAddrCode: string,
        keyFieldRegex: string,
        keyFieldMsg: string,
        keyFieldMsg2: string,
        mapType: string,
        mapTypeName: string,
        mapTypeName2: string,
        wallet: string,
        extId: string,
        longitude: string,
        latitude: string,
        address: string,
        address2: string,
        cityName: string,
        distName: string,
        timetable: string,
        timetable2: string,
        what3Words: string,
        buyCash: string,
        sellCash: string,
        buyNonCash: string,
        sellNonCash: string,
        menuCode: string,
        tokenExgUrl: string,
        headerColor: string,
        bodyColor: string,
        paymentUrl: string,
        homeUrl: string,
        flagImage: string,
        phoneNumLen: string,
        phoneNumPrefix: string,
        phoneNumMaxLen: string,
        phoneNumMinLen: string,
        isActivityTran: string,
        isTanFi: string,
        cseAllow: string
    ) {
        this.diffGreenwich = diffGreenwich
        this.num = num
        this.isoCode = isoCode
        this.name = name
        this.name2 = name2
        this.charCode = charCode
        this.isCrypto = isCrypto
        this.isBase = isBase
        this.isOnApp = isOnApp
        this.icon = icon
        this.iconDark = iconDark
        this.payeeType = payeeType
        this.payeeCode = payeeCode
        this.payeeName = payeeName
        this.payeeName2 = payeeName2
        this.vatSlip = vatSlip
        this.vatType = vatType
        this.vatPercent = vatPercent
        this.hint = hint
        this.hint2 = hint2
        this.prodId = prodId
        this.prodCode = prodCode
        this.serviceCode = serviceCode
        this.amt = amt
        this.cur = cur
        this.desc = desc
        this.note = note
        this.note2 = note2
        this.fiType = fiType
        this.fiCode = fiCode
        this.brief = brief
        this.brief2 = brief2
        this.isMember = isMember
        this.connId = connId
        this.phone = phone
        this.logo = logo
        this.logoDark = logoDark
        this.logoDim = logoDim
        this.statementIntervalDay = statementIntervalDay
        this.useOnlineReg = useOnlineReg
        this.isNeedKeyField = isNeedKeyField
        this.keyFieldType = keyFieldType
        this.keyFieldName = keyFieldName
        this.keyFieldName2 = keyFieldName2
        this.keyFieldCaption = keyFieldCaption
        this.keyFieldCaption2 = keyFieldCaption2
        this.typeId = typeId
        this.zipCode = zipCode
        this.countryCode = countryCode
        this.addrCode = addrCode
        this.operType = operType
        this.isFullTran = isFullTran
        this.isNeedTxnDesc = isNeedTxnDesc
        this.txnDescCaption = txnDescCaption
        this.txnDescCaption2 = txnDescCaption2
        this.isOnline = isOnline
        this.hasInvoice = hasInvoice
        this.payPartial = payPartial
        this.giveOrgVat = giveOrgVat
        this.payWout = payWout
        this.payMore = payMore
        this.payWoutNote = payWoutNote
        this.payWoutNote2 = payWoutNote2
        this.custPayAllow = custPayAllow
        this.cityAddrCode = cityAddrCode
        this.distAddrCode = distAddrCode
        this.keyFieldRegex = keyFieldRegex
        this.keyFieldMsg = keyFieldMsg
        this.keyFieldMsg2 = keyFieldMsg2
        this.mapType = mapType
        this.mapTypeName = mapTypeName
        this.mapTypeName2 = mapTypeName2
        this.wallet = wallet
        this.extId = extId
        this.longitude = longitude
        this.latitude = latitude
        this.address = address
        this.address2 = address2
        this.cityName = cityName
        this.distName = distName
        this.timetable = timetable
        this.timetable2 = timetable2
        this.what3Words = what3Words
        this.buyCash = buyCash
        this.sellCash = sellCash
        this.buyNonCash = buyNonCash
        this.sellNonCash = sellNonCash
        this.menuCode = menuCode
        this.tokenExgUrl = tokenExgUrl
        this.headerColor = headerColor
        this.bodyColor = bodyColor
        this.paymentUrl = paymentUrl
        this.homeUrl = homeUrl
        this.flagImage = flagImage
        this.phoneNumLen = phoneNumLen
        this.phoneNumPrefix = phoneNumPrefix
        this.phoneNumMaxLen = phoneNumMaxLen
        this.phoneNumMinLen = phoneNumMinLen
        this.isActivityTran = isActivityTran
        this.isTanFi = isTanFi
        this.cseAllow = cseAllow
    }

}