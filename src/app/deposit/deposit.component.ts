import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent {
  depositForm = this.formBuilder.group({
    depositValue: '',
  });

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit() {
    this.accountService.openDepositDialog(
      Number(this.depositForm.value.depositValue)
    );
  }

  onClick(value: number) {
    this.accountService.openDepositDialog(value);
  }
}
