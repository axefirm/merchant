"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var qr_list_item_component_1 = require("./qr-list-item.component");
describe('QrListItemComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [qr_list_item_component_1.QrListItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(qr_list_item_component_1.QrListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
