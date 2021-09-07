import { Injectable } from '@angular/core';
import { RsShopService } from 'src/app/rs-shop/service/rs-shop.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { EDataActions } from '../actions/data.actions';

@Injectable()
export class SubCategoriesEffects {
  public loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType<any>(EDataActions.GetSubCategories),
    map((action) => action.payload),
    switchMap((id: string) => this.rsShopService.getSubCategories(id)),
    map((subCategories: any) => ({ type: EDataActions.SetSubCategories, payload: subCategories })),
  ));

  constructor(
    private actions$: Actions,
    private rsShopService: RsShopService,
  ) {}
}

// -----------------------------------correct-------------------------------
