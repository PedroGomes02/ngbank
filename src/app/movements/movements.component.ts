import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css'],
})
export class MovementsComponent implements OnInit {
  movements: any = [];
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.movements = this.accountService.getMovements();
  }
}
