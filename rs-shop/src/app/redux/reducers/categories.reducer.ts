import { DataActions, EDataActions } from '../actions/data.actions';
import { IStateCategory } from '../models/state.models';
import { appState } from '../state/app.state';

export const categoriesReducer = (state = appState.categories, action: DataActions): IStateCategory[] => {
  switch (action.type) {
    case EDataActions.SetCategories: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
