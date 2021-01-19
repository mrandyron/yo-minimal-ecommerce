import { Action, createReducer, on } from '@ngrx/store';
import { Item } from '@app/items/models/item';
import { BusinessRules } from '@app/shopping-cart/business-rules-impl/business-rules';
import * as ShoppingCartActions from '@app/shopping-cart/store/shopping-cart.actions';

export const itemFeatureKey = 'items';
export const responseItemFeatureKey = 'responseItem';
export const businessRules = new BusinessRules();

export interface ShoppingCartItemState {
  items: Item[];
}

export const initialStateItem: ShoppingCartItemState = {
  items: []
};

const shoppingCartMethodReducer = createReducer(
  initialStateItem,
  on(ShoppingCartActions.addItemToShoppingCart,
    (state, { basket, item }) => {
      const cart = businessRules.startAddItemToCart(basket, item);
      return {
        ...state.items,
        items: cart
      };
    }
  ),
  on(ShoppingCartActions.decrementItemToShoppingCart,
    (state, { basket, item }) => {
      const cart = businessRules.decrementQtyPurchaseToItemFinded(basket, item);
      return {
        ...state.items,
        items: cart
      };
    }
  ),
  on(ShoppingCartActions.deleteItemsToShoppingCart,
    (state) => {
      return {
        ...state.items,
        items: []
      };
    }
  ),
  on(ShoppingCartActions.removeItemToShoppingCart,
    (state, { itemIndex }) => {
      const itemsRemoved = state.items.slice();
      itemsRemoved.splice(itemIndex, 1);
      return {
        items: itemsRemoved
      };
    }
  )
);

export function reducer(state: ShoppingCartItemState | undefined, action: Action) {
  return shoppingCartMethodReducer(state, action);
}
