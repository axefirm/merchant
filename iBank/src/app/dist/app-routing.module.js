"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var settings_component_1 = require("./main/pages/settings/settings.component");
var home_component_1 = require("./main/pages/home/home.component");
var register_component_1 = require("./main/pages/register/register.component");
var welcome_component_1 = require("./main/pages/welcome/welcome.component");
var settings_general_component_1 = require("./main/pages/settings-general/settings-general.component");
var settings_security_component_1 = require("./main/pages/settings-security/settings-security.component");
var settings_admin_component_1 = require("./main/pages/settings-admin/settings-admin.component");
var transfer_component_1 = require("./main/pages/transfer/transfer.component");
var report_component_1 = require("./main/pages/report/report.component");
var qr_code_component_1 = require("./main/pages/qr-code/qr-code.component");
var notification_component_1 = require("./main/pages/notification/notification.component");
var template_component_1 = require("./main/pages/template/template.component");
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot([
                    { path: '', component: welcome_component_1.WelcomeComponent },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'register', component: register_component_1.RegisterComponent },
                    // {path: 'dashboard', component: DashboardComponent},
                    { path: 'settings', component: settings_component_1.SettingsComponent },
                    { path: 'settings/general', component: settings_general_component_1.SettingsGeneralComponent },
                    { path: 'settings/security', component: settings_security_component_1.SettingsSecurityComponent },
                    { path: 'settings/admin', component: settings_admin_component_1.SettingsAdminComponent },
                    { path: 'transfer', component: transfer_component_1.TransferComponent },
                    { path: 'template', component: template_component_1.TemplateComponent },
                    { path: 'report', component: report_component_1.ReportComponent },
                    { path: 'qr', component: qr_code_component_1.QrCodeComponent },
                    { path: 'notification', component: notification_component_1.NotificationComponent },
                ], { relativeLinkResolution: 'legacy' })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
