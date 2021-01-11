"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var settings_security_component_1 = require("./settings-security.component");
describe('SettingsSecurityComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [settings_security_component_1.SettingsSecurityComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(settings_security_component_1.SettingsSecurityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
