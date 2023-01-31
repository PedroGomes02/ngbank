import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css'],
})
export class MovementsComponent implements OnInit {
  movements = [
    {
      index: 0,
      type: 'deposit',
      value: 0,
      balance: 0,
      date: 'Thu, 26 Jan 2020 11:02:09 GMT',
    },
  ];
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.movements = this.accountService.getMovements().reverse();
  }
}
