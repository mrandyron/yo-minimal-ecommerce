import { createFeatureSelector, createSelector } from '@ngrx/store';
import { itemsMethodFeatureKey, ItemsMethodsState } from '@app/items/store/items.reducer';

export const getItemMethodState = createFeatureSelector<ItemsMethodsState>(
  itemsMethodFeatureKey
);

export const getItemsMethods = createSelector(
  getItemMethodState,
  (state: ItemsMethodsState) => state.responseItem // Todo el ResponseItem --Eliminar cuando se entienda
);
