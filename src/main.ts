import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // HttpClient için gerekli
import { provideAnimations } from '@angular/platform-browser/animations'; // Animasyonlar için gerekli

import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { MainMenuComponent } from './app/main-menu/main-menu.component'; // Ana menü bileşenini import edin
import { AccountComponent } from './app/account/account.component'; // Hesap bileşenini import edin

// Yönlendirme yapılandırması
const routes = [
  { path: '', component: LoginComponent },
  { path: 'main-menu', component: MainMenuComponent }, // Ana menü bileşeni için rota
  { path: 'account', component: AccountComponent } // Hesap bilgileri için rota
];

const appConfig = {
  providers: [
    provideRouter(routes), // Yönlendirme yapılandırmasını burada sağlıyoruz
    provideHttpClient(),   // HttpClient için gerekli
    provideAnimations()    // Animasyonlar için gerekli
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
