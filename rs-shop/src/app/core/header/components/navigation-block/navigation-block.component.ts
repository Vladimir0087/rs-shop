import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CoreService } from 'src/app/core/service/core.service';
import { GetCategories } from 'src/app/redux/actions/data.actions';
import { selectMainCategories } from 'src/app/redux/selectors/selectors';
import { ICtegoriesAndSubCategoriesData } from 'src/app/rs-shop/models/rs-shop.models';
import { RsShopService } from 'src/app/rs-shop/service/rs-shop.service';

@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss'],
})
export class NavigationBlockComponent implements OnInit {
  public userName: string | null = '';

  public categories$: Observable<ICtegoriesAndSubCategoriesData[]> | undefined;

  constructor(public coreService: CoreService, public authService: AuthService, private store: Store, public rsShopService: RsShopService) {}

  ngOnInit() {
    this.store.dispatch(new GetCategories());
    this.categories$ = this.store.select(selectMainCategories);
  }
}
