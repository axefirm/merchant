"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var settings_admin_component_1 = require("./settings-admin.component");
describe('SettingsAdminComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [settings_admin_component_1.SettingsAdminComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(settings_admin_component_1.SettingsAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
