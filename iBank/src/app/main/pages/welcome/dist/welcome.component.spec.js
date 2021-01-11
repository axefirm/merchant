"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var welcome_component_1 = require("./welcome.component");
describe('WelcomeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [welcome_component_1.WelcomeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(welcome_component_1.WelcomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
