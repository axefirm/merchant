export class MgCustUpdateCustReq {
    name: string;
    name2: string;
    notifType: string;
    vatpsUserNo: string;
    picture: string;
    sqId: number;
    sqAnswer: string;
    sqHint: string;

    constructor(
        name: string,
        // name2: string,
        // notifType: string,
        // vatpsUserNo: string,
        // picture: string,
        // sqId: number,
        // sqAnswer: string,
        // sqHint: string
    ) {
        this.name = name
        // this.name2 = name2
        // this.notifType = notifType
        // this.vatpsUserNo = vatpsUserNo
        // this.picture = picture
        // this.sqId = sqId
        // this.sqAnswer = sqAnswer
        // this.sqHint = sqHint
    }

}
export class MgCustMainRes {
    responseCode: number;
    responseDesc: string;

    constructor(responseCode: number, responseDesc: string) {
        this.responseCode = responseCode
        this.responseDesc = responseDesc
    }

}
