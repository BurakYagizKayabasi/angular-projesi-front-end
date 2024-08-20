import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8080/api'; // API URL'nizi buraya ekleyin

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  getAccountDetails(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}/account-details`);
  }
}
