import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginName = '';

  public loginPassword = '';

  public loginMail = '';

  constructor(public authService: AuthService) {}

  public login():void {
    this.authService.logIn(this.loginName, this.loginPassword, this.loginMail);
  }
}
