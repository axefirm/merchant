import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table'
import { AppComponent } from './app.component';
import { OnlyNumber } from './core/directive/onlynumber.directive';
import { BtnComponent } from './main/fragments/btn/btn.component';
import { CarouselComponent } from './main/fragments/carousel/carousel.component';
import { IconCircleComponent } from './main/fragments/icon-circle/icon-circle.component';
import { MenuComponent } from './main/fragments/menu/menu.component';
import { TextFieldComponent } from './main/fragments/text-field/text-field.component';
import { CurrentComponent } from './main/modules/current/current.component';
import { DashboardComponent } from './main/pages/dashboard/dashboard.component';
import { HomeComponent } from './main/pages/home/home.component';
import { RegisterComponent } from './main/pages/register/register.component';
import { QuickTransactionComponent } from './main/modules/quick-transaction/quick-transaction.component';
import { WelcomeComponent } from './main/pages/welcome/welcome.component';
import { ProfileComponent } from './main/modules/profile/profile.component';
import { SettingsComponent } from './main/pages/settings/settings.component';
import { SettingsGeneralComponent } from './main/pages/settings-general/settings-general.component';
import { SettingsAdminComponent } from './main/pages/settings-admin/settings-admin.component';
import { SettingsSecurityComponent } from './main/pages/settings-security/settings-security.component';
import { TemplateComponent } from './main/pages/template/template.component';
import { TransferComponent } from './main/pages/transfer/transfer.component';
import { QrCodeComponent } from './main/pages/qr-code/qr-code.component';
import { ReportComponent } from './main/pages/report/report.component';
import { NotificationComponent } from './main/pages/notification/notification.component';
import { LocationComponent } from './main/pages/location/location.component';
import { QrListItemComponent } from './main/fragments/qr-list-item/qr-list-item.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { CardComponent } from './main/fragments/card/card.component';
import { QrCodeModule } from 'ng-qrcode';
import { CardSliderComponent } from './main/fragments/card-slider/card-slider.component';
import { NotifComponent } from './main/pages/notification/notif/notif.component';
import { NotifTranComponent } from './main/fragments/notif-tran/notif-tran.component';
import { NotifDetailComponent } from './main/fragments/notif-detail/notif-detail.component';
import { MatBadgeModule } from '@angular/material/badge';

import { DialogComponent } from './main/fragments/dialog/dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SettingsVerifyComponent } from './main/pages/settings-verify/settings-verify.component';
import { AddLocationComponent } from './main/fragments/add-location/add-location.component';
import { QrDownloadComponent } from './main/fragments/qr-download/qr-download.component';
import { RegisterIdDirective } from './core/directive/register-id.directive';

import { MatRadioModule } from '@angular/material/radio';
import { TransactionResultComponent } from './main/pages/transaction-result/transaction-result.component';
import { EncrService } from './core/services/enc.service';
import { AddUserComponent } from './main/fragments/add-user/add-user.component';
import { ChangePinComponent } from './main/pages/change-pin/change-pin.component';
import { ForgetPinComponent } from './main/pages/forget-pin/forget-pin.component';
import { CurrencyInfoComponent } from './main/modules/currency-info/currency-info.component';
import { PendingTransferComponent } from './main/fragments/pending-transfer/pending-transfer.component';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { ReportFilterComponent } from './main/fragments/report-filter/report-filter.component';
import { CreatePinDialogComponent } from './main/fragments/create-pin-dialog/create-pin-dialog.component';
import { ChangePinDialogComponent } from './main/fragments/change-pin-dialog/change-pin-dialog.component';
import { ChooseMerchantComponent } from './main/fragments/choose-merchant/choose-merchant.component';
import { WelcomeSectionComponent } from './main/fragments/welcome-section/welcome-section.component';
import { ChangeMobileComponent } from './main/pages/change-mobile/change-mobile.component';
import {MatMenuModule} from '@angular/material/menu';

// custom date picker 
import { HammerModule } from "@angular/platform-browser";
import { VerifyTanComponent } from './main/pages/verify-tan/verify-tan.component';
// import { IgxTimePickerModule } from 'igniteui-angular';
export function HttpLoaderFactory(httpClient: HttpClient) { return new TranslateHttpLoader(httpClient); }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BtnComponent,
    TextFieldComponent,
    IconCircleComponent,
    RegisterComponent,
    CarouselComponent,
    OnlyNumber,
    DashboardComponent,
    MenuComponent,
    CurrentComponent,
    QuickTransactionComponent,
    WelcomeComponent,
    ProfileComponent,
    SettingsComponent,
    SettingsGeneralComponent,
    SettingsAdminComponent,
    SettingsSecurityComponent,
    TemplateComponent,
    TransferComponent,
    QrCodeComponent,
    ReportComponent,
    NotificationComponent,
    LocationComponent,
    QrListItemComponent,
    CardComponent,
    CardSliderComponent,
    NotifComponent,
    NotifTranComponent,
    NotifDetailComponent,
    DialogComponent,
    SettingsVerifyComponent,
    AddLocationComponent,
    TransactionResultComponent,
    AddUserComponent,
    QrDownloadComponent,
    RegisterIdDirective,
    AddLocationComponent,
    DialogComponent,
    ReportFilterComponent,
    ChangePinComponent,
    CreatePinDialogComponent,
    ChangePinDialogComponent,
    ForgetPinComponent,
    CurrencyInfoComponent,
    PendingTransferComponent,
    ChooseMerchantComponent,
    WelcomeSectionComponent,
    ChangeMobileComponent,
    VerifyTanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    ReactiveFormsModule,
    FormsModule,
    MatCarouselModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    HammerModule, 
    // IgxTimePickerModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatDialogModule,
    NgApexchartsModule,
    QrCodeModule,
    MatCheckboxModule,
    MatRadioModule,
    MatRippleModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // Googlemap module
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAcnGd_6PbPDf9AqEcnhk8EeWFNUKPDyXQ'
    // })
  ],
  providers: [EncrService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }


