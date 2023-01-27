import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { userAccountFake } from 'src/data/userAccountFake';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  @Output() isAuthFromLogin = new EventEmitter<boolean>();

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    this.isAuthFromLogin.emit(
      this.accountService.checkAuth(
        this.loginForm.value.email,
        this.loginForm.value.password
      )
    );
  }
}
