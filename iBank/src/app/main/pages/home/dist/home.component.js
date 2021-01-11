"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var const_1 = require("src/app/core/model/const");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(formBuilder, translate) {
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.Pages = const_1.Pages;
        this.title = "Current";
        translate.setDefaultLang('en');
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.index = const_1.Pages.current;
        this.main = this.formBuilder.group({
            useramount: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    // Хэл солих
    HomeComponent.prototype.changeLang = function (lang) {
        this.translate.use(lang);
        location.replace(window.location.href);
        // window.location.href = window.location.href
    };
    HomeComponent.prototype.changeIndex = function (val) {
        this.index = val;
        console.log(val);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
