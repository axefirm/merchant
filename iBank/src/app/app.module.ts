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
import { HomeComponent } from './main/pages/home/home.component';
import { QuickTransactionComponent } from './main/modules/quick-transaction/quick-transaction.component';
import { ProfileComponent } from './main/modules/profile/profile.component';
import { TemplateComponent } from './main/pages/template/template.component';
import { NotificationComponent } from './main/pages/notification/notification.component';
import { LocationComponent } from './main/pages/location/location.component';
import { QrListItemComponent } from './main/fragments/qr-list-item/qr-list-item.component';
import {MatDialogModule} from '@angular/material/dialog';

export function HttpLoaderFactory(httpClient: HttpClient) { return new TranslateHttpLoader(httpClient); }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BtnComponent,
    TextFieldComponent,
    IconCircleComponent,
    CarouselComponent,
    OnlyNumber,
    MenuComponent,
    CurrentComponent,
    QuickTransactionComponent,
    ProfileComponent,
    TemplateComponent,
    NotificationComponent,
    LocationComponent,
    QrListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatCarouselModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule, 
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    NgApexchartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


