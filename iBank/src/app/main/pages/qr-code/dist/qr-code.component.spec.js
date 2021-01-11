"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var qr_code_component_1 = require("./qr-code.component");
describe('QrCodeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [qr_code_component_1.QrCodeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(qr_code_component_1.QrCodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
