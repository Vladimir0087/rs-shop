import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStateCategory } from '../models/state.models';

const selectCategories = createFeatureSelector<IStateCategory[]>('categories');

export const selectMainCategories = createSelector(
  selectCategories,
  (categories) => categories.map((el: IStateCategory) => ({ name: el.name, id: el.id })),
);

export const selectSubCategories = (id: string) => createSelector(
  selectCategories,
  (categories) => categories.find((el: IStateCategory) => el.id === id)?.subCategories,
);
