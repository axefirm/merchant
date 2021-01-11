"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BtnComponent = void 0;
var core_1 = require("@angular/core");
var BtnComponent = /** @class */ (function () {
    function BtnComponent() {
    }
    BtnComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], BtnComponent.prototype, "borderColor");
    __decorate([
        core_1.Input()
    ], BtnComponent.prototype, "iconColor");
    __decorate([
        core_1.Input()
    ], BtnComponent.prototype, "backgroundColor");
    __decorate([
        core_1.Input()
    ], BtnComponent.prototype, "icon");
    __decorate([
        core_1.Input()
    ], BtnComponent.prototype, "title");
    __decorate([
        core_1.Input()
    ], BtnComponent.prototype, "description");
    __decorate([
        core_1.Input()
    ], BtnComponent.prototype, "badge");
    BtnComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line: component-selector
            selector: 'btn',
            templateUrl: './btn.component.html',
            styleUrls: ['./btn.component.scss']
        })
    ], BtnComponent);
    return BtnComponent;
}());
exports.BtnComponent = BtnComponent;
