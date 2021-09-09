import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStateCategory, ISubCategories } from '../models/state.models';

const selectCategories = createFeatureSelector<IStateCategory[]>('categories');

export const selectMainCategories = createSelector(
  selectCategories,
  (categories) => categories.map((el: IStateCategory) => ({ name: el.name, id: el.id })),
);

export const selectSubCategories = (id: string) => createSelector(
  selectCategories,
  (categories) => categories.find((el: IStateCategory) => el.id === id)?.subCategories,
);

export const selectSubCategoriesByValue = (value: string) => createSelector(
  selectCategories,
  (categories) => categories.map((el: IStateCategory) => el.subCategories
    .filter((category) => category.name.toLowerCase().includes(value.toLowerCase())))
    .reduce((acc, val) => acc.concat(val), []),
);

export const selectCategoryById = (id: string) => createSelector(
  selectCategories,
  (categories) => categories.find((el: IStateCategory) => el.id === id),
);

export const selectSubCategoryById = (categoryId: string, subCategoryId: string) => createSelector(
  selectCategoryById(categoryId),
  (categories) => categories?.subCategories.find((el: ISubCategories) => el.id === subCategoryId),
);
