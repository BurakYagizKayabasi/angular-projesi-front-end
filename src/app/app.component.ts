import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // RouterOutlet eklenmeli

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // RouterOutlet eklenmeli
  template: `<router-outlet></router-outlet>`, // RouterOutlet kullanılmalı
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
