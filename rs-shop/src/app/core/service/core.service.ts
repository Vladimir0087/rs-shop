import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(public router: Router) {}

  public goToLogin(): void {
    this.router.navigateByUrl('login');
  }
}
