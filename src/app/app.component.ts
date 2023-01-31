import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isAuthFromLogin = false;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    if (localStorage.getItem('email')) {
      const emailLogged: string = localStorage.getItem('email') || '';
      const dataAccountLogged: string = localStorage.getItem(emailLogged) || '';
      this.accountService.setAccount(JSON.parse(dataAccountLogged));
      this.isAuthFromLogin = true;
    }
  }

  handleIsAuth(emitValue: boolean) {
    this.isAuthFromLogin = emitValue;
  }
}
