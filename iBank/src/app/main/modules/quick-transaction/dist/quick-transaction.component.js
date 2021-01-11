"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuickTransactionComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var QuickTransactionComponent = /** @class */ (function () {
    function QuickTransactionComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    QuickTransactionComponent.prototype.ngOnInit = function () {
        this.main = this.formBuilder.group({
            useramount: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    QuickTransactionComponent = __decorate([
        core_1.Component({
            selector: 'app-quick-transaction',
            templateUrl: './quick-transaction.component.html',
            styleUrls: ['./quick-transaction.component.scss']
        })
    ], QuickTransactionComponent);
    return QuickTransactionComponent;
}());
exports.QuickTransactionComponent = QuickTransactionComponent;
