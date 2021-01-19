import { createFeatureSelector } from '@ngrx/store';
import { itemFeatureKey, ShoppingCartItemState } from '@app/shopping-cart/store/shopping-cart.reducer';

export const addItemMethodState = createFeatureSelector<ShoppingCartItemState>(
  itemFeatureKey
);
