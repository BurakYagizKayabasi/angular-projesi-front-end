import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from 'C:/Users/burak/vscode/ATMProjem-Frontend/src/app/app.routes'; // Varsayılan olarak içe aktarın
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common'; // CurrencyPipe'ı import edin
import { CommonModule } from '@angular/common';  // CommonModule'ü import edin

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(),
    provideHttpClient(),
    CurrencyPipe, // CurrencyPipe'ı sağlayıcılara ekleyin
    CommonModule
  ]
};
