import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';

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
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    this.accountService.withdrawFunds(
      Number(this.withdrawForm.value.withdrawValue)
    );
    this.withdrawForm.reset();
  }
}
