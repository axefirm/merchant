import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './main/pages/settings/settings.component';
import { DashboardComponent } from './main/pages/dashboard/dashboard.component';
import { HomeComponent } from './main/pages/home/home.component';
import { RegisterComponent } from './main/pages/register/register.component';
import { WelcomeComponent } from './main/pages/welcome/welcome.component';
import { SettingsGeneralComponent } from './main/pages/settings-general/settings-general.component';
import { SettingsSecurityComponent } from './main/pages/settings-security/settings-security.component';
import { SettingsAdminComponent } from './main/pages/settings-admin/settings-admin.component';
import { TransferComponent } from './main/pages/transfer/transfer.component';
import { ReportComponent } from './main/pages/report/report.component';
import { QrCodeComponent } from './main/pages/qr-code/qr-code.component';
import { NotificationComponent } from './main/pages/notification/notification.component';
import { TemplateComponent } from './main/pages/template/template.component';
import { TransactionResultComponent } from './main/pages/transaction-result/transaction-result.component';

// bilguun 
import { LocationComponent } from './main/pages/location/location.component';
import { SettingsVerifyComponent } from './main/pages/settings-verify/settings-verify.component';
import { PendingTransferComponent } from './main/fragments/pending-transfer/pending-transfer.component';
import { ChangePinComponent } from './main/pages/change-pin/change-pin.component';
import { ForgetPinComponent } from './main/pages/forget-pin/forget-pin.component';
import { ChangeMobileComponent } from './main/pages/change-mobile/change-mobile.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: WelcomeComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent, },
    { path: 'change-pin', component: ChangePinComponent, },
    { path: 'forget-pin', component: ForgetPinComponent, },
    { path: 'change-mobile', component: ChangeMobileComponent, },
    // {path: 'dashboard', component: DashboardComponent},
    { path: 'settings', component: SettingsComponent },
    { path: 'settings/general', component: SettingsGeneralComponent },
    { path: 'settings/security', component: SettingsSecurityComponent },
    { path: 'settings/admin', component: SettingsAdminComponent },
    { path: 'transfer', component: TransferComponent },
    { path: 'template', component: TemplateComponent },
    { path: 'report', component: ReportComponent },
    { path: 'qr', component: QrCodeComponent },
    { path: 'notification', component: NotificationComponent },
    { path: 'location', component: LocationComponent },
    { path: 'settings/verify', component: SettingsVerifyComponent },
    { path: 'transaction/result', component: TransactionResultComponent },
    { path: 'transaction/approval', component: PendingTransferComponent }
  ], { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
