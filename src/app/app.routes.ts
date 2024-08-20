import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AccountComponent } from './account/account.component';
import { TransactionsComponent } from './transactions/transactions.component'; // Eğer varsa

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'account', component: AccountComponent },
  { path: 'transactions', component: TransactionsComponent }, // Eğer varsa
  { path: '**', redirectTo: '' } // Var olmayan yollar için yönlendirme
];

export { routes };
