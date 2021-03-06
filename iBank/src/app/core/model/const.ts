export class Pages {
    public static notification: number = 0;
    public static current: number = 1;
    public static transfer: number = 2;
    public static qrcode: number = 3;
    public static report: number = 4;
    public static template: number = 5;
    public static location: number = 6;
    public static settings: number = 7;
}

export enum DialogType {
    password,
    location,
    addUser,
    qr,
    createPinDialog,
    changePinDialog,
    reportFilter,
    chooseMerchant,
    confirmUser
}

export class eCredStatus {
    public static new: string = 'NEW';
    public static normal: string = 'NORMAL';
    public static expired: string = 'EXPIRED';
    public static blocked: string = 'BLOCKED';
}
