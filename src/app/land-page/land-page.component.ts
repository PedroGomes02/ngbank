import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css'],
})
export class LandPageComponent implements OnInit {
  balance = 0;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.balance = this.accountService.getBalance();
  }

}
