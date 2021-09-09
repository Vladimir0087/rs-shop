import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IGoodsOfCategory } from 'src/app/redux/models/state.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RsShopService {
  constructor(private router: Router, private http: HttpClient, private store: Store) {}

  public getGoodsOfCategory(categoryId: string, subCategoryId: string): Observable<IGoodsOfCategory[]> {
    return this.http.get(`http://localhost:3004/goods/category/${categoryId}/${subCategoryId}?start=0&count=10`) as Observable<IGoodsOfCategory[]>;
  }

  public goToGoodsOfCategoryPage(categoryId: string, subCategoryId: string): void {
    this.router.navigate([categoryId, subCategoryId]);
  }
}
