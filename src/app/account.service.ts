import { Injectable } from '@angular/core';
import { userAccountFake, UserInterface } from 'src/data/userAccountFake';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  userData = {
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
  
  setAccount(userAccount: UserInterface) {
    this.userData = userAccount;
  }

  checkAuth(email: string | null | undefined, password: string | null | undefined) {
    if (userAccountFake.email === email) {
      if (userAccountFake.password === password) {
        this.setAccount(userAccountFake);
        return true;
      } else {
        alert('Wrong Password');
        return;
      }
    } else {
      alert('Wrong Email');
      return;
    }
  }

  getBalance() {
    return this.userData.account.balance;
  }

  getMovements() {
    return this.userData.account.movements;
  }

  depositFunds(value: number) {
    if (value <= 0) {
      alert('Not possible to deposit zero or a negative value!');
    } else {
      this.userData.account.balance += value;
      this.userData.account.movements.push({
        index: this.userData.account.movements.length,
        type: 'deposit',
        value: value,
        balance: this.userData.account.balance,
        date: new Date().toUTCString(),
      });
      alert(`You have deposit ${value}€`);
    }
  }
  
  withdrawFunds(value: number) {
    if (value <= 0) {
      alert('Not possible to withdraw zero or a negative value!');
    } else if (value > this.userData.account.balance) {
      alert('Insuficcient Funds!');
    } else {
      this.userData.account.balance -= value;
      this.userData.account.movements.push({
        index: this.userData.account.movements.length,
        type: 'withdraw',
        value: value,
        balance: this.userData.account.balance,
        date: new Date().toUTCString(),
      });
      alert(`You have withdraw ${value}€`);
    }
  }
}
