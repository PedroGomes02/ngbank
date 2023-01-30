import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  onSubmit() {
    this.accountService.withdrawFunds(
      Number(this.withdrawForm.value.withdrawValue)
    );
    this.router.navigateByUrl('/');
  }
}
