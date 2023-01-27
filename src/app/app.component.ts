import { Component } from '@angular/core';
import { AccountService } from './account.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private accountService: AccountService, private router: Router) {}

  isAuthFromLogin = false;

  handleIsAuth(emitValue: any) {
    this.isAuthFromLogin = emitValue;
  }
}
