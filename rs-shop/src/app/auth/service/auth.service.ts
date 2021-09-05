import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private tokenName = 'userName';

  public userName: string | null = localStorage.getItem(this.tokenName);

  constructor(public router: Router) {}

  public logIn(login: string, password: string, mail: string): void {
    const validName: number = login.trim().length;
    const validPassword: number = password.trim().length;
    const validMail: number = mail.trim().length;
    if (validName && validPassword && validMail) {
      localStorage.setItem(this.tokenName, login);
      this.router.navigateByUrl('mainpage');
      this.userName = login;
    }
  }

  public logOut(): void {
    this.router.navigateByUrl('mainpage');
    localStorage.removeItem(this.tokenName);
    this.userName = null;
  }
}
