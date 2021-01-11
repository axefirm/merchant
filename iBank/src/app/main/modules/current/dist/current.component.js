"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CurrentComponent = void 0;
var core_1 = require("@angular/core");
var ELEMENT_DATA1 = [
    { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka" },
    { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka" },
    { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka" },
    { bankName: 'XacBank', amount: '6000', correspondentName: "Enkhbayar", accountNo: '5000611662', date: "10 Feb 2020", description: "Vodka" },
];
var CurrentComponent = /** @class */ (function () {
    function CurrentComponent(changeDetectorRefs) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.displayedColumns = [];
        this.displayedColumnsHide = ['bankamount', 'amount', 'acntNo', 'date', 'symbol'];
        this.displayedColumnsNotHide = ['bankamount', 'amount', 'symbol'];
        this.dataSource = ELEMENT_DATA1;
        this.isHide = true;
        this.test = true;
        this.chartOptions = {
            series: [
                {
                    name: 'series1',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }
            ],
            chart: {
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:30:00.000Z',
                    '2018-09-19T02:30:00.000Z',
                    '2018-09-19T03:30:00.000Z',
                    '2018-09-19T04:30:00.000Z',
                    '2018-09-19T05:30:00.000Z',
                    '2018-09-19T06:30:00.000Z'
                ]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                }
            }
        };
    }
    CurrentComponent.prototype.ngOnInit = function () {
        console.log(this.dataSource);
        this.displayedColumns = this.displayedColumnsHide;
    };
    CurrentComponent.prototype.hide = function () {
        this.isHide = !this.isHide;
        console.log(this.isHide);
        if (this.isHide)
            this.displayedColumns = this.displayedColumnsHide;
        else
            this.displayedColumns = this.displayedColumnsNotHide;
        this.changeDetectorRefs.detectChanges();
    };
    CurrentComponent.prototype.generateData = function (baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    };
    __decorate([
        core_1.ViewChild('chart')
    ], CurrentComponent.prototype, "chart");
    CurrentComponent = __decorate([
        core_1.Component({
            selector: 'app-current',
            templateUrl: './current.component.html',
            styleUrls: ['./current.component.scss']
        })
    ], CurrentComponent);
    return CurrentComponent;
}());
exports.CurrentComponent = CurrentComponent;
