import { Optional } from "@angular/core";

export class MgCredChangeReq {
    oldValue: string;
    newValue: string;

    constructor(oldValue: string, @Optional() newValue: string) {
        this.oldValue = oldValue
        this.newValue = newValue
    }
}




export class MgCredChangeRes {
    responseCode: number;
    responseDesc: string;

    constructor(responseCode: number, responseDesc: string) {
        this.responseCode = responseCode
        this.responseDesc = responseDesc
    }
}