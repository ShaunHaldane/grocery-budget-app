import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UserFinancialDataComponent } from './user-financial-data/user-financial-data.component';
import { UserFinancialDataPerItemComponent } from './user-financial-data-per-item/user-financial-data-per-item.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AdminPanelComponent,
    UserDashboardComponent,
    AddItemComponent,
    UserFinancialDataComponent,
    UserFinancialDataPerItemComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
