import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component'; // Yeni bileşeni import edin
import { DashboardComponent } from './dashboard/dashboard.component'; // Dashboard bileşenini import edin
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'dashboard', component: DashboardComponent } // Dashboard için rota tanımlaması
];

export default routes;
