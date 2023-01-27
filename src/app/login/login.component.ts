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
    this.accountService.setIsAuth(true);
    this.accountService.setAccount(userAccountFake)
    this.isAuthFromLogin.emit(true);
  }
}
