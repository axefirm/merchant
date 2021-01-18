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

// bilguun 
import { LocationComponent } from './main/pages/location/location.component';
import { SettingsVerifyComponent } from './main/pages/settings-verify/settings-verify.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: WelcomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
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
    { path: 'location', component: LocationComponent},
    { path: 'settings/verify', component: SettingsVerifyComponent},

], { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
