import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/data/userAccountFake';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css'],
})
export class LandPageComponent implements OnInit {
  balance = 0;
  userData: UserInterface = {
    name: '',
    email: '',
    password: '',
    account: {
      balance: 0,
      movements: [
        {
          index: 0,
          type: 'deposit',
          value: 0,
          balance: 0,
          date: 'Thu, 26 Jan 2020 11:02:09 GMT',
        },
      ],
    },
  };

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.balance = this.accountService.getBalance();
    this.userData = this.accountService.userData;
  }
}
