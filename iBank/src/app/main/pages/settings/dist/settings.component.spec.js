"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var settings_component_1 = require("./settings.component");
describe('SettingsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [settings_component_1.SettingsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(settings_component_1.SettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
