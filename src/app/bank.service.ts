import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private apiUrl = `${environment.apiUrl}/customers`;
  private userApiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  // Tüm müşterileri almak için
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  // Belirli bir kullanıcıyı ID ile almak için
  getUserById(userId: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.userApiUrl}/${userId}`);
  }
}

export interface Customer {
  musteriName: string;
  musteriSurname: string;
  musteriBakiye: number;
  musteriAge: number;
  musteriTcNo: string;
  musteriHesapNo: string;
}
