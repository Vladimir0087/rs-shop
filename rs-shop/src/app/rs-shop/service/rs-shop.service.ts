import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class RsShopService {
  constructor(private router: Router, private http: HttpClient, private store: Store) {}

  // public openSubCategories(id: string): void {
  //   this.store.dispatch(new GetSubCategories(id));
  // }

  public getSubCategories(id: string) {
    return this.http.get(`http://localhost:3004/goods/category/${id}`);
  }
}
