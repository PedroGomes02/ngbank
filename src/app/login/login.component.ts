import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  @Output() isAuth = new EventEmitter<boolean>();

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit() {
    this.accountService.setIsAuth(true);
    this.isAuth.emit(true);
    this.loginForm.reset();
    this.router.navigateByUrl('/');
  }
}
