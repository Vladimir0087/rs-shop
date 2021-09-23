import { Action } from '@ngrx/store';
import { IStateCategory } from '../models/state.models';

export enum EDataActions {
  GetCategories = 'Get Categories',
  SetCategories = 'Set Categories',
}

export class GetCategories implements Action {
  public readonly type = EDataActions.GetCategories;
}

export class SetCategories implements Action {
  public readonly type = EDataActions.SetCategories;

  constructor(public payload: IStateCategory[]) {}
}

export type DataActions = GetCategories | SetCategories;
