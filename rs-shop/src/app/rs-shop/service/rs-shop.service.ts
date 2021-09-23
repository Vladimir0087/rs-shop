import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IGoods, IGoodsDetailed, IGoodsWithAmount } from 'src/app/redux/models/state.models';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RsShopService {
  public popularGoods: IGoods[] | any = [];

  private cart = 'cart';

  private favorite = 'favorite';

  private waitList = 'waitList';

  public waitListData = JSON.parse(localStorage.getItem(this.waitList) as string) || [];

  public cartData: Array<IGoodsWithAmount> = JSON.parse(localStorage.getItem(this.cart) as string);

  public favoriteData: Array<IGoodsDetailed | IGoods> = JSON.parse(localStorage.getItem(this.favorite) as string);

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

  public goToDetailedPage(goodsId: string): void {
    this.getGoodsById(goodsId).subscribe((res) => {
      this.router.navigate([res.category, res.subCategory, goodsId]);
    });
  }

  public addToCart(goods: IGoodsDetailed | IGoods):void {
    const goodsWithAmount: IGoodsWithAmount = { ...goods, amount: 1 };
    if (!localStorage.getItem(this.cart)) {
      localStorage.setItem(this.cart, JSON.stringify([goodsWithAmount]));
      this.cartData = [goodsWithAmount];
    } else {
      const addedGoodsCart: Array<IGoodsWithAmount> = JSON.parse(localStorage.getItem(this.cart) as string);
      if (addedGoodsCart.find((el) => el.name === goods.name)) {
        addedGoodsCart.splice(addedGoodsCart.findIndex((el) => el.name === goods.name), 1);
      } else addedGoodsCart.push(goodsWithAmount);
      localStorage.setItem(this.cart, JSON.stringify(addedGoodsCart));
      this.cartData = addedGoodsCart;
    }
  }

  public deleteCartGoods(name: string):void {
    const addedGoodsCart: Array<IGoodsWithAmount> = JSON.parse(localStorage.getItem(this.cart) as string);
    addedGoodsCart.splice(addedGoodsCart.findIndex((el) => el.name === name), 1);
    localStorage.setItem(this.cart, JSON.stringify(addedGoodsCart));
    this.cartData = addedGoodsCart;
  }

  public clearCartData(currentDelivery: object):void {
    const order = {
      cart: JSON.parse(localStorage.getItem(this.cart) as string),
      // cart: this.cartData,
      delivery: currentDelivery,
    };
    this.waitListData.push(order);
    localStorage.setItem(this.waitList, JSON.stringify(this.waitListData));
    localStorage.removeItem(this.cart);
    this.cartData.length = 0;
  }

  public addToFavorite(goods: IGoodsDetailed | IGoods):void {
    if (!localStorage.getItem(this.favorite)) {
      localStorage.setItem(this.favorite, JSON.stringify([goods]));
      this.favoriteData = [goods];
    } else {
      const addedGoodsFavorite: Array<IGoodsDetailed | IGoods> = JSON.parse(localStorage.getItem(this.favorite) as string);
      if (addedGoodsFavorite.find((el) => el.name === goods.name)) {
        addedGoodsFavorite.splice(addedGoodsFavorite.findIndex((el) => el.name === goods.name), 1);
      } else addedGoodsFavorite.push(goods);
      localStorage.setItem(this.favorite, JSON.stringify(addedGoodsFavorite));
      this.favoriteData = addedGoodsFavorite;
    }
  }

  public deleteFavoriteGoods(name: string):void {
    const addedFavoriteCart: Array<IGoodsDetailed | IGoods> = JSON.parse(localStorage.getItem(this.favorite) as string);
    addedFavoriteCart.splice(addedFavoriteCart.findIndex((el) => el.name === name), 1);
    localStorage.setItem(this.favorite, JSON.stringify(addedFavoriteCart));
    this.favoriteData = addedFavoriteCart;
  }

  public clearFavoriteData():void {
    localStorage.removeItem(this.favorite);
    this.favoriteData = [];
  }
}
