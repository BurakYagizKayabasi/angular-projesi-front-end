import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
})
export class MainMenuComponent {

  constructor(private router: Router) { }

  viewTransactions(): void {
    this.router.navigate(['/transactions']);
  }

  viewAccount(): void {
    this.router.navigate(['/account']);
  }
}
