"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var settings_general_component_1 = require("./settings-general.component");
describe('SettingsGeneralComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [settings_general_component_1.SettingsGeneralComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(settings_general_component_1.SettingsGeneralComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
