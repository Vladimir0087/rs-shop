import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStateCategory } from 'src/app/redux/models/state.models';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(public router: Router, private http: HttpClient) {}

  public goToLogin(): void {
    this.router.navigateByUrl('login');
  }

  public goToMainPage(): void {
    this.router.navigateByUrl('mainpage');
  }

  public goToCatalog(): void {
    this.router.navigateByUrl('catalog');
  }

  public getGoodsByValue(value:string): Observable<any> {
    return this.http.get(`http://localhost:3004/goods/search?text=${value}`);
  }

  public getCategories(): Observable<IStateCategory[]> {
    return this.http.get('http://localhost:3004/categories') as Observable<IStateCategory[]>;
  }
}
