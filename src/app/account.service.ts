import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  isAuth: boolean = false;

  account = {
    balance: 10,
    movements: [
      {
        index: 0,
        type: 'deposit',
        value: 10,
        balance: 10,
        date: 'Thu, 26 Jan 2023 11:02:09 GMT',
      },
      {
        index: 1,
        type: 'deposit',
        value: 10,
        balance: 20,
        date: 'Thu, 26 Jan 2023 11:03:09 GMT',
      },
      {
        index: 2,
        type: 'withdraw',
        value: 10,
        balance: 10,
        date: 'Thu, 26 Jan 2023 11:05:09 GMT',
      },
    ],
  };
  constructor() {}

  getIsAuth() {
    return this.isAuth;
  }

  setIsAuth(isAuth: boolean) {
    this.isAuth = isAuth;
    console.log(this.getIsAuth());
  }

  getBalance() {
    return this.account.balance;
  }

  getMovements() {
    return this.account.movements;
  }

  depositFunds(value: number) {
    if (value <= 0) {
      alert('Not possible to deposit zero or a negative value!');
    } else {
      this.account.balance += value;
      this.account.movements.push({
        index: this.account.movements.length,
        type: 'deposit',
        value: value,
        balance: this.account.balance,
        date: new Date().toUTCString(),
      });
      alert(`You have deposit ${value}`);
    }
  }
  withdrawFunds(value: number) {
    if (value <= 0) {
      alert('Not possible to withdraw zero or a negative value!');
    } else if (value > this.account.balance) {
      alert('Insuficcient Funds!');
    } else {
      this.account.balance -= value;
      this.account.movements.push({
        index: this.account.movements.length,
        type: 'withdraw',
        value: value,
        balance: this.account.balance,
        date: new Date().toUTCString(),
      });
      alert(`You have withdraw ${value}`);
    }
  }
}
