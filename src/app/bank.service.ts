import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<any> {
    // Kullanıcı ID'sini buradan alabilir veya kullanıcıyı kimlik doğrulama ile alabilirsiniz
    const userId = 1; // Örnek ID
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`);
  }

  getTransactions(): Observable<any[]> {
    const userId = 1; // Örnek ID
    return this.http.get<any[]>(`${this.apiUrl}/transactions/${userId}`);
  }
}
