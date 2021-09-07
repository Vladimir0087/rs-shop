import { ActionReducerMap } from '@ngrx/store';
import { DataActions } from '../actions/data.actions';
import { IStateCategory, IStateSubCategory } from '../models/state.models';
import { categoriesReducer } from './categories.reducer';
import { subCategoriesReducer } from './sub-categories.reducer';

interface IState {
  categories: IStateCategory[],
  subCategories: IStateSubCategory[],
}

export const appReducers: ActionReducerMap<IState, DataActions> = {
  categories: categoriesReducer,
  subCategories: subCategoriesReducer,
};

// -----------------------------------correct-------------------------------
