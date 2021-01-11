"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/animations");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.indicator = 0;
        this.maxIndex = 4;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.main = this.formBuilder.group({
            amount: new forms_1.FormControl('', [forms_1.Validators.required]),
            mobileNo: new forms_1.FormControl('', [forms_1.Validators.required]),
            regNo: new forms_1.FormControl('', [forms_1.Validators.required]),
            fname: new forms_1.FormControl('', [forms_1.Validators.required]),
            lname: new forms_1.FormControl('', [forms_1.Validators.required]),
            tan: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    RegisterComponent.prototype.moveToStructure = function () {
        console.log("gg");
    };
    RegisterComponent.prototype.onChange = function () {
        console.log("gg");
    };
    RegisterComponent.prototype.next = function (input) {
        console.log(this.main);
        if (input < this.maxIndex) {
            this.indicator = input;
        }
        else {
            // TODO
            // this.indicator = 0;
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss'],
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
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
