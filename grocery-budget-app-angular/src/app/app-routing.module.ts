import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UserFinancialDataComponent } from './user-financial-data/user-financial-data.component';
import { UserFinancialDataPerItemComponent } from './user-financial-data-per-item/user-financial-data-per-item.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'user-financial-data', component: UserFinancialDataComponent },
  { path: 'user-financial-data-per-item', component: UserFinancialDataPerItemComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
