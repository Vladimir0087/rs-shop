import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RsShopService } from 'src/app/rs-shop/service/rs-shop.service';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private tokenName = 'userName';

  private cart = 'cart';

  private favorite = 'favorite';

  private waitList = 'waitList';

  public userName: string | null = localStorage.getItem(this.tokenName);

  constructor(public router: Router, private rsShopService:RsShopService) {}

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
    localStorage.removeItem(this.cart);
    localStorage.removeItem(this.favorite);
    localStorage.removeItem(this.waitList);
    this.rsShopService.cartData.length = 0;
    this.rsShopService.waitListData.length = 0;
    this.rsShopService.favoriteData.length = 0;
    this.userName = null;
  }
}
