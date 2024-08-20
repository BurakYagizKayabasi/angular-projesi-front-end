import { Component, OnInit } from '@angular/core';
import { BankService, Customer } from '../bank.service'; // Dosya yolunu kontrol edin
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  imports :  [FormsModule,CommonModule],
  standalone : true
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.bankService.getCustomers().subscribe(response => {
      console.log("Customer " + response);
      this.customers = response;
      console.log();

    });
  }
}
