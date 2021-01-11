"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var quick_transaction_component_1 = require("./quick-transaction.component");
describe('QuickTransactionComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [quick_transaction_component_1.QuickTransactionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(quick_transaction_component_1.QuickTransactionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
