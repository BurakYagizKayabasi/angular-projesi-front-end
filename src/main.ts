import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // HttpClient için gerekli
import { provideAnimations } from '@angular/platform-browser/animations'; // Animasyonlar için gerekli
import { CommonModule } from '@angular/common'; // CommonModule'ı ekleyin

import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { CustomerListComponent } from './app/customer-list/customer-list.component'; // Müşteri listesi bileşenini import edin

// Yönlendirme yapılandırması
const routes = [
  { path: '', component: LoginComponent },
  { path: 'customers', component: CustomerListComponent }
  // Diğer yönlendirmeleri buraya ekleyebilirsiniz
];

const appConfig = {
  providers: [
    provideRouter(routes), // Yönlendirme yapılandırmasını burada sağlıyoruz
    provideHttpClient(),   // HttpClient için gerekli
    provideAnimations(),   // Animasyonlar için gerekli
    CommonModule, // CommonModule'ı sağlayıcılar listesine ekleyin
    BrowserModule
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
