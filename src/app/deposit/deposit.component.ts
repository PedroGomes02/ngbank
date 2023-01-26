import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';

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
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    this.accountService.depositFunds(
      Number(this.depositForm.value.depositValue)
    );
    this.depositForm.reset();
  }
}
