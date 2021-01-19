import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { itemFeatureKey, ShoppingCartItemState } from '@shopping-cart/store/shopping-cart.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public shoppingCart$: Observable<any>;
  public qtyItemInBasket = 0;
  private items = [];

  constructor(private storeShoppingCart: Store<ShoppingCartItemState>) {
    this.shoppingCart$ = this.storeShoppingCart.select(itemFeatureKey);
    this.shoppingCart$.subscribe(response => {
      this.items = response.items;
      this.countItemsAdded();
    });
  }

  countItemsAdded() {
    this.qtyItemInBasket = this.items.reduce((sum, value) => (typeof value.qtyPurchase === 'number' ? sum + value.qtyPurchase : sum), 0);
  }

}
