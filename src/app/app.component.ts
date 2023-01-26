import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showLoginForm = true;
  constructor(private accountService: AccountService, private router: Router) {}

  handleIsAuth(emitValue: boolean) {
    this.showLoginForm = emitValue;
    alert('change no app component');
  }
  ngOnInit() {
    this.showLoginForm = !this.accountService.getIsAuth();
    if (this.showLoginForm) {
      this.router.navigateByUrl('/login');
    }
  }
}
