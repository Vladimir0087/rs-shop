import { ActionReducerMap } from '@ngrx/store';
import { DataActions } from '../actions/data.actions';
import { IStateCategory } from '../models/state.models';
import { categoriesReducer } from './categories.reducer';

interface IState {
  categories: IStateCategory[],
}

export const appReducers: ActionReducerMap<IState, DataActions> = {
  categories: categoriesReducer,
};
