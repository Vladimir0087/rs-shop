import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IGoods, IGoodsDetailed } from 'src/app/redux/models/state.models';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RsShopService {
  constructor(private router: Router, private http: HttpClient, private store: Store) {}

  public getGoodsOfCategory(categoryId: string, subCategoryId: string, start: string = '0'): Observable<IGoods[]> {
    return this.http.get<IGoods[]>(`http://localhost:3004/goods/category/${categoryId}/${subCategoryId}?start=${start}&count=10`).pipe(
      catchError(() => {
        this.router.navigateByUrl('notfoundpage');
        return EMPTY;
      }),
    );
  }

  public getGoodsById(goodsId: string): Observable<IGoodsDetailed> {
    return this.http.get<IGoodsDetailed>(`http://localhost:3004/goods/item/${goodsId}`).pipe(
      catchError(() => {
        this.router.navigateByUrl('notfoundpage');
        return EMPTY;
      }),
    );
  }

  public goToGoodsOfCategoryPage(categoryId: string, subCategoryId: string): void {
    this.router.navigate([categoryId, subCategoryId]);
  }
}
