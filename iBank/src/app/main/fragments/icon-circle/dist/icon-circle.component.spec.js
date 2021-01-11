"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var icon_circle_component_1 = require("./icon-circle.component");
describe('IconCircleComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [icon_circle_component_1.IconCircleComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(icon_circle_component_1.IconCircleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
