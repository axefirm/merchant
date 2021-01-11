"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var transfer_component_1 = require("./transfer.component");
describe('TransferComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [transfer_component_1.TransferComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(transfer_component_1.TransferComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
