import { Injectable } from '@angular/core';
import { userAccountFake, UserInterface } from 'src/data/userAccountFake';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { Router } from '@angular/router';

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

  constructor(private router: Router, public dialog: MatDialog) {}

  checkAuth(
    email: string | null | undefined,
    password: string | null | undefined
  ) {
    if (userAccountFake.email === email) {
      if (userAccountFake.password === password) {
        localStorage.setItem('email', email);
        localStorage.setItem(email, JSON.stringify(userAccountFake));
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

  setAccount(userAccount: UserInterface) {
    this.userData = userAccount;
  }

  getBalance() {
    return this.userData.account.balance;
  }

  getMovements() {
    return this.userData.account.movements;
  }

  openDepositDialog(value: number): any {
    if (value <= 0) {
      alert('Not possible to deposit zero or a negative value!');
      return;
    }
    const message = 'Deposit';
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: { message: message, value: value },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.userData.account.balance += value;
        this.userData.account.movements.push({
          index: this.userData.account.movements.length,
          type: 'deposit',
          value: value,
          balance: this.userData.account.balance,
          date: new Date().toUTCString(),
        });
        localStorage.setItem(
          this.userData.email,
          JSON.stringify(this.userData)
        );
        this.router.navigateByUrl('/');
      }
    });
  }

  openWithdrawDialog(value: number): any {
    if (value <= 0) {
      alert('Not possible to withdraw zero or a negative value!');
      return;
    }
    if (value > this.userData.account.balance) {
      alert('Insuficcient Funds!');
      return;
    }
    const message = 'Withdraw';
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: { message: message, value: value },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.userData.account.balance -= value;
        this.userData.account.movements.push({
          index: this.userData.account.movements.length,
          type: 'withdraw',
          value: value,
          balance: this.userData.account.balance,
          date: new Date().toUTCString(),
        });
        localStorage.setItem(
          this.userData.email,
          JSON.stringify(this.userData)
        );
        this.router.navigateByUrl('/');
      }
    });
  }
}
