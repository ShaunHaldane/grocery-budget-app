import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FinancialDataPerItemComponent } from './financial-data-per-item/financial-data-per-item.component';
import { FinancialDataComponent } from './financial-data/financial-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addItem', component: AddItemComponent },
  { path: 'financialData', component: FinancialDataComponent },
  { path: 'financialDataPerItem', component: FinancialDataPerItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
