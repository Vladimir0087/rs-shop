import { CoreService } from 'src/app/core/service/core.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { DataActions, EDataActions } from '../actions/data.actions';
import { IStateCategory } from '../models/state.models';

@Injectable()
export class CategoriesEffects {
  public loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType<DataActions>(EDataActions.GetCategories),
    switchMap(() => this.coreService.getCategories()),
    map((categories: IStateCategory[]) => ({ type: EDataActions.SetCategories, payload: categories })),
  ));

  constructor(
    private actions$: Actions,
    private coreService: CoreService,
  ) {}
}
