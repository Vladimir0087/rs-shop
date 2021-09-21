import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGoodsDetailed, IStateCategory, ISubCategories } from 'src/app/redux/models/state.models';
import { selectCategoryById, selectSubCategoryById } from 'src/app/redux/selectors/selectors';
import { RsShopService } from '../../service/rs-shop.service';

@Component({
  selector: 'app-detailed-goods-page',
  templateUrl: './detailed-goods-page.component.html',
  styleUrls: ['./detailed-goods-page.component.scss'],
})
export class DetailedGoodsPageComponent implements OnInit {
  public goods: IGoodsDetailed | any | undefined;

  public category$: Observable<IStateCategory | undefined> | undefined;

  public subCategory$: Observable<ISubCategories | undefined> | undefined;

  public categoryId = '';

  public subCategoryId = '';

  constructor(public rsShopService:RsShopService, private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.rsShopService.getGoodsById(params.goodsId as string).subscribe((res) => {
        this.goods = res;
      });
      this.category$ = this.store.select(selectCategoryById(params.categoryId));
      this.subCategory$ = this.store.select(selectSubCategoryById(params.categoryId, params.subCategoryId));
      this.categoryId = params.categoryId;
      this.subCategoryId = params.subCategoryId;
    });
  }
}
