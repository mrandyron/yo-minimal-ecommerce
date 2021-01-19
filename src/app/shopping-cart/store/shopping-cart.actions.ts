import { createAction, props } from '@ngrx/store';
import { Item } from '@app/items/models/item';

export const addItemToShoppingCart = createAction(
  '[ShoppingCartMethod] Add Item',
  props<{ basket: Item[], item: Item }>()
);

export const decrementItemToShoppingCart = createAction(
  '[ShoppingCartMethod] Delete Item on ShoppingCart',
  props<{ basket: Item[], item: Item }>()
);

export const deleteItemsToShoppingCart = createAction(
  '[ShoppingCartMethod] Delete Items Basket'
);

export const removeItemToShoppingCart = createAction(
  '[ShoppingCartMethod] Remove Item Basket',
  props<{ itemIndex: number }>()
);


export const loadItemSuccess = createAction(
  '[ShoppingCartMethod] Load Item Success',
  props<{ item: Item }>()
);

export const loadItemError = createAction(
  '[ShoppingCartMethod] Load Item Error',
  props<{ item: Item }>()
);
