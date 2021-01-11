"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var text_field_component_1 = require("./text-field.component");
describe('TextFieldComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [text_field_component_1.TextFieldComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(text_field_component_1.TextFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
