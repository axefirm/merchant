"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReportComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ReportComponent = /** @class */ (function () {
    function ReportComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.main = this.formBuilder.group({
            useramount: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'app-report',
            templateUrl: './report.component.html',
            styleUrls: ['./report.component.scss']
        })
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
