import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCategoryById, selectSubCategoryById } from 'src/app/redux/selectors/selectors';
import { RsShopService } from 'src/app/rs-shop/service/rs-shop.service';
import { IGoodsOfCategory, IStateCategory, ISubCategories } from 'src/app/redux/models/state.models';

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

  public goodsOfCategory: IGoodsOfCategory[] = [];

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

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.rsShopService.getGoodsOfCategory(params.categoryId as string, params.subCategoryId as string)
        .subscribe((res) => { this.goodsOfCategory = res; });
      this.category$ = this.store.select(selectCategoryById(params.categoryId));
      this.subCategory$ = this.store.select(selectSubCategoryById(params.categoryId, params.subCategoryId));
    });
  }
}
