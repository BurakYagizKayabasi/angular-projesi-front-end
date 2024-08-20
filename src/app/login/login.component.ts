import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // HttpClient'i import edin
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; // CommonModule'ü import edin

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, // CommonModule'ü imports dizisine ekleyin
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  onSubmit() {
    this.http.post<any>('http://localhost:8080/api/login', {
      username: this.username,
      password: this.password
    }).pipe(
      catchError(error => {
        console.error('Giriş hatası:', error);
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        return of({ success: false });
      })
    ).subscribe(response => {
      if (response.success) {
        // Başarılı girişten sonra yönlendirme
        this.router.navigate(['/customers']); // Örneğin, bir dashboard sayfasına yönlendirin
      } else {
        alert('Kullanıcı adı veya şifre yanlış.');
      }
    });
  }
}
