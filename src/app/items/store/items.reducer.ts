import { Action, createReducer, on } from '@ngrx/store';
import * as ItemsActions from './items.actions';
import { ResponseItem } from '../models/item';

export const itemsMethodFeatureKey = 'responseItem';

export interface ItemsMethodsState {
  responseItem: ResponseItem;
}

export const initialState: ItemsMethodsState = {
  responseItem: { items: [], cod: 0, item: null, message: '', totalItems: 0, totalPages: 0 }
};

const itemsMethodReducer = createReducer(
  initialState,
  on(ItemsActions.searchAllItems, state => state),
  on(
    ItemsActions.searchItemsByWords,
    (state, { searchWord }) => {
      return {
        ...state,
        responseItem: { ...state.responseItem, word: searchWord }
      };
    }
  ),
  on(ItemsActions.loadItemsSuccess, (state, payload) => ({
    ...state,
    responseItem: payload.responseItem
  })),
  on(ItemsActions.loadItemsError, state => state)
);

export function reducer(state: ItemsMethodsState | undefined, action: Action) {
  return itemsMethodReducer(state, action);
}
