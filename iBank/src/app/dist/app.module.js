"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.HttpLoaderFactory = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var form_field_1 = require("@angular/material/form-field");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var select_1 = require("@angular/material/select");
var tabs_1 = require("@angular/material/tabs");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var material_carousel_1 = require("@ngbmodule/material-carousel");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var ng_apexcharts_1 = require("ng-apexcharts");
var app_routing_module_1 = require("./app-routing.module");
var table_1 = require("@angular/material/table");
var app_component_1 = require("./app.component");
var onlynumber_directive_1 = require("./core/directive/onlynumber.directive");
var btn_component_1 = require("./main/fragments/btn/btn.component");
var carousel_component_1 = require("./main/fragments/carousel/carousel.component");
var icon_circle_component_1 = require("./main/fragments/icon-circle/icon-circle.component");
var menu_component_1 = require("./main/fragments/menu/menu.component");
var text_field_component_1 = require("./main/fragments/text-field/text-field.component");
var current_component_1 = require("./main/modules/current/current.component");
var dashboard_component_1 = require("./main/pages/dashboard/dashboard.component");
var home_component_1 = require("./main/pages/home/home.component");
var register_component_1 = require("./main/pages/register/register.component");
var quick_transaction_component_1 = require("./main/modules/quick-transaction/quick-transaction.component");
var welcome_component_1 = require("./main/pages/welcome/welcome.component");
var profile_component_1 = require("./main/modules/profile/profile.component");
var settings_component_1 = require("./main/pages/settings/settings.component");
var settings_general_component_1 = require("./main/pages/settings-general/settings-general.component");
var settings_admin_component_1 = require("./main/pages/settings-admin/settings-admin.component");
var settings_security_component_1 = require("./main/pages/settings-security/settings-security.component");
var template_component_1 = require("./main/pages/template/template.component");
var transfer_component_1 = require("./main/pages/transfer/transfer.component");
var qr_code_component_1 = require("./main/pages/qr-code/qr-code.component");
var report_component_1 = require("./main/pages/report/report.component");
var notification_component_1 = require("./main/pages/notification/notification.component");
var location_component_1 = require("./main/pages/location/location.component");
var qr_list_item_component_1 = require("./main/fragments/qr-list-item/qr-list-item.component");
var dialog_1 = require("@angular/material/dialog");
var card_component_1 = require("./main/fragments/card/card.component");
var ng_qrcode_1 = require("ng-qrcode");
var card_slider_component_1 = require("./main/fragments/card-slider/card-slider.component");
function HttpLoaderFactory(httpClient) { return new http_loader_1.TranslateHttpLoader(httpClient); }
exports.HttpLoaderFactory = HttpLoaderFactory;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                btn_component_1.BtnComponent,
                text_field_component_1.TextFieldComponent,
                icon_circle_component_1.IconCircleComponent,
                register_component_1.RegisterComponent,
                carousel_component_1.CarouselComponent,
                onlynumber_directive_1.OnlyNumber,
                dashboard_component_1.DashboardComponent,
                menu_component_1.MenuComponent,
                current_component_1.CurrentComponent,
                quick_transaction_component_1.QuickTransactionComponent,
                welcome_component_1.WelcomeComponent,
                profile_component_1.ProfileComponent,
                settings_component_1.SettingsComponent,
                settings_general_component_1.SettingsGeneralComponent,
                settings_admin_component_1.SettingsAdminComponent,
                settings_security_component_1.SettingsSecurityComponent,
                template_component_1.TemplateComponent,
                transfer_component_1.TransferComponent,
                qr_code_component_1.QrCodeComponent,
                report_component_1.ReportComponent,
                notification_component_1.NotificationComponent,
                location_component_1.LocationComponent,
                qr_list_item_component_1.QrListItemComponent,
                card_component_1.CardComponent,
                card_slider_component_1.CardSliderComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                button_1.MatButtonModule,
                card_1.MatCardModule,
                icon_1.MatIconModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                material_carousel_1.MatCarouselModule.forRoot(),
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                tabs_1.MatTabsModule,
                table_1.MatTableModule,
                select_1.MatSelectModule,
                http_1.HttpClientModule,
                dialog_1.MatDialogModule,
                ng_apexcharts_1.NgApexchartsModule,
                ng_qrcode_1.QrCodeModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient]
                    }
                }),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
