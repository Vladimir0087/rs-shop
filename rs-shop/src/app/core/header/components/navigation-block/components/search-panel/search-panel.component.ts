import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, filter, map,
} from 'rxjs/operators';
import { CoreService } from 'src/app/core/service/core.service';
import { ISubCategories } from 'src/app/redux/models/state.models';
import { selectSubCategoriesByValue } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  public keyUp$: Subject<KeyboardEvent> = new Subject();

  public searchGoods$: Observable<any> | undefined;

  public searchCategories$: Observable<ISubCategories[]> | undefined;

  public myControl = new FormControl();

  constructor(public coreService: CoreService, private store: Store) {}

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
