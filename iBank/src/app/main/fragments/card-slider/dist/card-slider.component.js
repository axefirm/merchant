"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardSliderComponent = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var CardSliderComponent = /** @class */ (function () {
    function CardSliderComponent() {
        this.indicator = 0;
    }
    CardSliderComponent.prototype.ngOnInit = function () {
    };
    CardSliderComponent.prototype.next = function (input) {
        if (input < 3) {
            this.indicator = input;
        }
        else {
            this.indicator = 0;
        }
    };
    CardSliderComponent = __decorate([
        core_1.Component({
            selector: 'app-card-slider',
            templateUrl: './card-slider.component.html',
            styleUrls: ['./card-slider.component.scss'],
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
    ], CardSliderComponent);
    return CardSliderComponent;
}());
exports.CardSliderComponent = CardSliderComponent;
