"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WelcomeComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/animations");
var WelcomeComponent = /** @class */ (function () {
    // browserLang: string = sessionStorage.getItem('lang') ? sessionStorage.getItem('lang') : 'mn';
    function WelcomeComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.indicator = 0;
        this.maxIndex = 3;
        this.carousels = [
            {
                title: "iBanking platform1",
                description: "All-In-One solution, bringing a full suite of financial services to your fingertips."
            },
            {
                title: "iBanking platform2",
                description: "All-In-One solution, bringing a full suite of financial services to your fingertips."
            },
            {
                title: "iBanking platform3",
                description: "All-In-One solution, bringing a full suite of financial services to your fingertips."
            }
        ];
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.main = this.formBuilder.group({
            useramount: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this.intervalRequest();
    };
    WelcomeComponent.prototype.intervalRequest = function () {
        var _this = this;
        clearInterval(this.carouselInterval);
        this.carouselInterval = setInterval(function () {
            _this.next(_this.indicator + 1);
        }, 6000);
    };
    WelcomeComponent.prototype.next = function (input) {
        this.intervalRequest();
        if (input < this.maxIndex) {
            this.indicator = input;
        }
        else {
            this.indicator = 0;
        }
    };
    WelcomeComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.carouselInterval);
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'app-welcome',
            templateUrl: './welcome.component.html',
            styleUrls: ['./welcome.component.scss'],
            animations: [
                animations_1.trigger('myAnimation', [
                    animations_1.state('in', animations_1.style({ transform: 'translateX(0)' })),
                    animations_1.transition('void => *', animations_1.animate('600ms ease-in', animations_1.keyframes([
                        animations_1.style({ opacity: 0, offset: 0 }),
                        animations_1.style({ opacity: 1, offset: 1.0 })
                    ])))
                ]),
            ]
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
