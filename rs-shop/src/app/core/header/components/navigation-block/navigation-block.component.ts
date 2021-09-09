import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CoreService } from 'src/app/core/service/core.service';
import { GetCategories } from 'src/app/redux/actions/data.actions';
import { selectMainCategories } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss'],
})
export class NavigationBlockComponent implements OnInit {
  public userName: string | null = '';

  public categories$: any;

  constructor(public coreService: CoreService, public authService: AuthService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetCategories());
    this.categories$ = this.store.select(selectMainCategories);
  }
}
