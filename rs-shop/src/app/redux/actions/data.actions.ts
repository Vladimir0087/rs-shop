import { Action } from '@ngrx/store';
import { IStateCategory } from '../models/state.models';

export enum EDataActions {
  GetCategories = 'Get Categories',
  SetCategories = 'Set Categories',
  GetSubCategories = 'Get SubCategories',
  SetSubCategories = 'Set SubCategories',
}

export class GetCategories implements Action {
  public readonly type = EDataActions.GetCategories;
}

export class GetSubCategories implements Action {
  public readonly type = EDataActions.GetSubCategories;

  constructor(public payload: any) {}
}

export class SetSubCategories implements Action {
  public readonly type = EDataActions.SetSubCategories;

  constructor(public payload: any) {}
}

export class SetCategories implements Action {
  public readonly type = EDataActions.SetCategories;

  constructor(public payload: IStateCategory[]) {}
}

export type DataActions = GetCategories | SetCategories | GetSubCategories | SetSubCategories;

// -----------------------------------correct-------------------------------
