import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISubCategories } from 'src/app/redux/models/state.models';
import { selectMainCategories, selectSubCategories } from 'src/app/redux/selectors/selectors';
import { ICtegoriesAndSubCategoriesData } from '../../models/rs-shop.models';
import { RsShopService } from '../../service/rs-shop.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent implements OnInit {
  public categories$: Observable<ICtegoriesAndSubCategoriesData[]> | undefined;

  public subCategories$: Observable<ISubCategories[] | undefined> | undefined;

  public categoriesIcons: string[] = ['assets/appliances.png', 'assets/electronics.png',
    'assets/computers.png', 'assets/furniture.png', 'assets/hobby.png'];

  private categoryId: string = '';

  private defaultSubCategory = 'appliances';

  constructor(private store: Store, public rsShopService: RsShopService) {}

  public openSubCategories(id: string): void {
    this.categoryId = id;
    this.subCategories$ = this.store.select(selectSubCategories(id));
  }

  public goToGoodsOfCategoryPage(subCategoryId: string) {
    this.rsShopService.goToGoodsOfCategoryPage(this.categoryId, subCategoryId);
  }

  ngOnInit() {
    this.categories$ = this.store.select(selectMainCategories);
    this.openSubCategories(this.defaultSubCategory);
  }
}
