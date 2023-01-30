import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAuthFromLogin = true;
  // isAuthFromLogin = false;

  handleIsAuth(emitValue: boolean) {
    this.isAuthFromLogin = emitValue;
  }
}
