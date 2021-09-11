import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCategoryById, selectSubCategoryById } from 'src/app/redux/selectors/selectors';
import { RsShopService } from 'src/app/rs-shop/service/rs-shop.service';
import { IGoods, IStateCategory, ISubCategories } from 'src/app/redux/models/state.models';

@Component({
  selector: 'app-goods-of-category-page',
  templateUrl: './goods-of-category-page.component.html',
  styleUrls: ['./goods-of-category-page.component.scss'],
})
export class GoodsOfCategoryPageComponent implements OnInit {
  private increasePrice = true;

  private increaseRating = true;

  public category$: Observable<IStateCategory | undefined> | undefined;

  public subCategory$: Observable<ISubCategories | undefined> | undefined;

  public goodsOfCategory: IGoods[] = [];

  private categoryId = '';

  private subCategoryId = '';

  private startIndToGetGoods = 0;

  constructor(public rsShopService:RsShopService, private route: ActivatedRoute, private store: Store) {}

  public arrayRating(count: number): undefined[] {
    return Array(count);
  }

  public sortByPrice() {
    if (this.increasePrice) this.goodsOfCategory.sort((a, b) => a.price - b.price);
    else this.goodsOfCategory.sort((a, b) => b.price - a.price);
    this.increasePrice = !this.increasePrice;
  }

  public sortByRating() {
    if (this.increaseRating) this.goodsOfCategory.sort((a, b) => a.rating - b.rating);
    else this.goodsOfCategory.sort((a, b) => b.rating - a.rating);
    this.increaseRating = !this.increaseRating;
  }

  public addGoods() {
    this.rsShopService.getGoodsOfCategory(this.categoryId, this.subCategoryId, this.startIndToGetGoods.toString())
      .subscribe((res) => { this.goodsOfCategory = this.goodsOfCategory.concat(res); });
    this.startIndToGetGoods += 10;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categoryId = params.categoryId;
      this.subCategoryId = params.subCategoryId;
      this.category$ = this.store.select(selectCategoryById(params.categoryId));
      this.subCategory$ = this.store.select(selectSubCategoryById(params.categoryId, params.subCategoryId));
      this.rsShopService.getGoodsOfCategory(params.categoryId, params.subCategoryId)
        .subscribe((res) => { this.goodsOfCategory = res; });
      this.startIndToGetGoods = 10;
    });
  }
}
