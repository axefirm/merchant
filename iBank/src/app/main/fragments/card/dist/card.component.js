"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardComponent = void 0;
var core_1 = require("@angular/core");
var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.img = "./../../../../assets/img/card.png";
        this.acntNo = "5000 6116 6224 2584";
        this.currency = "MNT";
        this.balance = "1,200,000.00";
        this.qr = "test";
        this.shadow = false;
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], CardComponent.prototype, "img");
    __decorate([
        core_1.Input()
    ], CardComponent.prototype, "acntNo");
    __decorate([
        core_1.Input()
    ], CardComponent.prototype, "currency");
    __decorate([
        core_1.Input()
    ], CardComponent.prototype, "balance");
    __decorate([
        core_1.Input()
    ], CardComponent.prototype, "qr");
    __decorate([
        core_1.Input()
    ], CardComponent.prototype, "shadow");
    CardComponent = __decorate([
        core_1.Component({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.scss']
        })
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
