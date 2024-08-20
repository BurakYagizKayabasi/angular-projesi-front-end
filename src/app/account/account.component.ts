import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'], // Eğer stil dosyası varsa
  imports :  [FormsModule,CommonModule],
  standalone : true
})
export class AccountComponent implements OnInit {
  accountDetails: any = {}; // Hesap detaylarını saklamak için

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    const userId = Number(localStorage.getItem('userId')); // Kullanıcı ID'sini localStorage'dan alıyoruz
    if (userId) {
      this.accountService.getAccountDetails(userId).subscribe(data => {
        this.accountDetails = data;
      });
    }
  }
}
