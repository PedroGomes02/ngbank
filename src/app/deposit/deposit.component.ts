import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit() {
    this.accountService.depositFunds(
      Number(this.depositForm.value.depositValue)
    );
    this.depositForm.reset();
    this.router.navigateByUrl('/');
  }
}
