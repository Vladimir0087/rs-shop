import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGoodsDetailed, IStateCategory } from 'src/app/redux/models/state.models';

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

  public goToWaitingListPage(): void {
    this.router.navigateByUrl('waiting-list');
  }

  public getGoodsByValue(value:string): Observable<IGoodsDetailed[]> {
    return this.http.get(`http://localhost:3004/goods/search?text=${value}`) as Observable<IGoodsDetailed[]>;
  }

  public goToDetailedGoodsPage(categoryId: string, subCategoryId: string, goodsId: string): void {
    this.router.navigate([categoryId, subCategoryId, goodsId]);
  }

  public goToCartPage(): void {
    this.router.navigateByUrl('cart');
  }

  public goToFavoritePage(): void {
    this.router.navigateByUrl('favorite');
  }

  public getCategories(): Observable<IStateCategory[]> {
    return this.http.get('http://localhost:3004/categories') as Observable<IStateCategory[]>;
  }
}
