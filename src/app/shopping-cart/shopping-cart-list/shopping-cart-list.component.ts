import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { itemFeatureKey, ShoppingCartItemState } from '@shopping-cart/store/shopping-cart.reducer';
import { Store } from '@ngrx/store';
import { Item } from '@app/items/models/item';
import { Constants } from '@constants/constansts';
import * as ShoppingCartActions from '../store/shopping-cart.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart.component-list.css']
})
export class ShoppingCartListComponent implements OnDestroy {

  basket$: Observable<any>;
  public basket: Item[];
  private cart: Item[];
  public items$: Observable<any>;
  total = 0;
  subTotal = 0;
  taxes = 0;
  showPaymentMethod = false;

  image: string;
  PHOTO_ITEM = Constants.PHOTO_ITEM;

  public urlEndpoint = Constants.URL_ENDPOINT;
  public methodLoadCPhoto = 'image/get/upload/';

  constructor(private storeShoppingCart: Store<ShoppingCartItemState>,
              public translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    this.items$ = this.storeShoppingCart.select(itemFeatureKey);
    this.items$.subscribe(response => {
      this.basket = response.items;
      this.totalResult();
    });
  }

  validateQtyPurchase(itemIndex: number) {
    if (this.basket[itemIndex].qtyPurchase < 1) {
      this.removeItem(itemIndex);
    }
  }

  deleteBasket() {
    this.storeShoppingCart.dispatch(ShoppingCartActions.deleteItemsToShoppingCart());
  }

  removeItem(itemIndex: number) {
    this.storeShoppingCart.dispatch(ShoppingCartActions.removeItemToShoppingCart({ itemIndex }));
    this.totalResult();
  }

  totalResult() {
    this.total = this.basket.reduce((a, b) => (a + (b.qtyPurchase * b.price)), 0);
    const taxes = ((this.total * 0.16) / 100);
    this.subTotal = this.total - taxes;
    this.taxes = taxes;
  }

  addItemToBasket(itemAdd: Item) {
    this.basket$ = this.storeShoppingCart.select(itemFeatureKey);
    this.basket$.subscribe(
      response => {
        this.cart = JSON.parse(JSON.stringify(response));
      }
    );
    this.storeShoppingCart.dispatch(ShoppingCartActions.addItemToShoppingCart({ basket: this.cart, item: itemAdd }));
  }

  decrementItemToBasket(itemAdd: Item) {
    this.basket$ = this.storeShoppingCart.select(itemFeatureKey);
    this.basket$.subscribe(
      response => {
        this.cart = JSON.parse(JSON.stringify(response));
      }
    );
    this.storeShoppingCart.dispatch(ShoppingCartActions.decrementItemToShoppingCart({ basket: this.cart, item: itemAdd }));
  }

  backToBasket() {
    this.showPaymentMethod = false;
  }

  toPay() {
    this.showPaymentMethod = true;
  }


  ngOnDestroy() {
    this.items$.subscribe().unsubscribe();
  }

}
