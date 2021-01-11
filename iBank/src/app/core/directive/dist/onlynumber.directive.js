"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OnlyNumber = void 0;
var core_1 = require("@angular/core");
var OnlyNumber = /** @class */ (function () {
    function OnlyNumber(el) {
        this.el = el;
        this.regexStr = '^[0-9]*$';
    }
    OnlyNumber.prototype.onKeyDown = function (event) {
        var e = event;
        if (this.OnlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+V
                (e.keyCode == 86 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            var ch = String.fromCharCode(e.keyCode);
            var regEx = new RegExp(this.regexStr);
            if (regEx.test(ch))
                return;
            else
                e.preventDefault();
        }
    };
    __decorate([
        core_1.Input()
    ], OnlyNumber.prototype, "OnlyNumber");
    __decorate([
        core_1.HostListener('keydown', ['$event'])
    ], OnlyNumber.prototype, "onKeyDown");
    OnlyNumber = __decorate([
        core_1.Directive({
            selector: '[OnlyNumber]'
        })
    ], OnlyNumber);
    return OnlyNumber;
}());
exports.OnlyNumber = OnlyNumber;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
