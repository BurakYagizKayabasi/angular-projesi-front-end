import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {
  balance!: number; // Başlangıç değeri yok

  constructor(private accountService: AccountService) {
    this.balance = 0; // Constructor'da başlatıldı
  }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance(): void {
    const userId = 1; // Giriş yapan kullanıcı ID'si
    this.accountService.getAccountDetails(userId).subscribe((data) => {
      this.balance = data.balance;
    });
  }

  sendMoney(amount: number): void {
    // Para gönderme işlemi kodu burada
  }

  withdrawMoney(amount: number): void {
    // Para çekme işlemi kodu burada
  }
}
