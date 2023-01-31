import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
})
export class WithdrawComponent {
  withdrawForm = this.formBuilder.group({
    withdrawValue: '',
  });

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit() {
    this.accountService.openWithdrawDialog(
      Number(this.withdrawForm.value.withdrawValue)
    );
  }

  onClick(value: number) {
    this.accountService.openWithdrawDialog(value);
  }
}
