"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var card_slider_component_1 = require("./card-slider.component");
describe('CardSliderComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [card_slider_component_1.CardSliderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(card_slider_component_1.CardSliderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
