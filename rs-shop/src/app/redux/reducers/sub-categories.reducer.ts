import { DataActions, EDataActions } from '../actions/data.actions';
import { IStateSubCategory } from '../models/state.models';
import { appState } from '../state/app.state';

export const subCategoriesReducer = (state = appState.subCategories, action: DataActions): IStateSubCategory[] => {
  switch (action.type) {
    case EDataActions.SetSubCategories: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

// -----------------------------------correct-------------------------------
