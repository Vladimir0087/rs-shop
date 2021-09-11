import {
  Component, ElementRef, OnInit, ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, filter, map,
} from 'rxjs/operators';
import { CoreService } from 'src/app/core/service/core.service';
import { IGoodsDetailed, ISubCategories } from 'src/app/redux/models/state.models';
import { selectCategoryBySubcategoryId, selectSubCategoriesByValue } from 'src/app/redux/selectors/selectors';
import { RsShopService } from 'src/app/rs-shop/service/rs-shop.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  public searchValue = '';

  public keyUp$: Subject<KeyboardEvent> = new Subject();

  public searchGoods$: Observable<IGoodsDetailed[]> | undefined;

  public searchCategories$: Observable<ISubCategories[]> | undefined;

  public myControl = new FormControl();

  constructor(public coreService: CoreService, private store: Store, public rsShopService: RsShopService) {}

  public goToGoodsOfCategoryPage(subCategoryId: string):void {
    this.store.select(selectCategoryBySubcategoryId(subCategoryId)).subscribe((category) => {
      if (category) this.rsShopService.goToGoodsOfCategoryPage(category.id, subCategoryId);
    });
    if (this.searchInput) this.searchInput.nativeElement.value = '';
  }

  public goToDetailedGoodsPage(categoryId: string, subCategoryId: string, goodsId: string):void {
    this.coreService.goToDetailedGoodsPage(categoryId, subCategoryId, goodsId);
    if (this.searchInput) this.searchInput.nativeElement.value = '';
  }

  @ViewChild('searchInput', { static: false })
  searchInput: ElementRef | undefined;

  ngOnInit() {
    this.keyUp$.pipe(
      map((el: any) => el?.currentTarget?.value),
      distinctUntilChanged(),
      filter((value: string) => value.length > 2),
      debounceTime(300),
    )
      .subscribe((value) => {
        this.searchGoods$ = this.coreService.getGoodsByValue(value);
        this.searchCategories$ = this.store.select(selectSubCategoriesByValue(value));
      });
  }
}
