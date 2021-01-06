import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/pages/home/home.component';
import { NotificationComponent } from './main/pages/notification/notification.component';
import { TemplateComponent } from './main/pages/template/template.component';


@NgModule({
  imports: [RouterModule.forRoot(
    [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    // {path: 'register', component: RegisterComponent},
    // {path: 'dashboard', component: DashboardComponent},
    // {path: 'settings', component: SettingsComponent},
    // {path: 'settings/general', component: SettingsGeneralComponent},
    // {path: 'settings/security', component: SettingsSecurityComponent},
    // {path: 'settings/admin', component: SettingsAdminComponent},
    // {path: 'transfer', component: TransferComponent},
    {path: 'template', component: TemplateComponent},
    // {path: 'report', component: ReportComponent},
    // {path: 'qr', component: QrCodeComponent},
    {path: 'notification', component: NotificationComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
