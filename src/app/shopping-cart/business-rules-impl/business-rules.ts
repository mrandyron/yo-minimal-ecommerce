import { Item } from '@app/items/models/item';

export class BusinessRules {

  private basket: Item[] = [];
  private item: Item;
  private itemExist: Item;

  public startAddItemToCart(basket: any, item: Item): Item[] {
    this.basket = JSON.parse(JSON.stringify(basket.items));
    this.item = JSON.parse(JSON.stringify(item)) as Item;
    this.itemExist = this.basket.find(l => l.id === this.item.id);

    if (this.existItemIntoCart()) {
      if (this.itemExist) {
        this.incrementQtyPurchaseToItemFinded();
      } else {
        this.setOneToItemPurchase();
        this.addItemToBasket();
      }
    } else {
      this.setOneToItemPurchase();
      this.addItemToBasket();
    }
    return this.basket;
  }

  existItemIntoCart() {
    return this.basket.length > 0;
  }

  incrementQtyPurchaseToItemFinded() {
    this.basket.map((b) => {
      if (b.id === this.itemExist.id) {
        b.qtyPurchase += 1;
      }
    });
  }

  setOneToItemPurchase() {
    this.item.qtyPurchase = 1;
  }

  addItemToBasket() {
    this.basket.push(this.item);
  }

  decrementQtyPurchaseToItemFinded(basket: any, item: Item): Item[] {
    this.basket = JSON.parse(JSON.stringify(basket.items));
    this.item = JSON.parse(JSON.stringify(item)) as Item;
    this.itemExist = this.basket.find(l => l.id === this.item.id);

    this.basket.map((b) => {
      if (b.id === this.itemExist.id) {
        b.qtyPurchase -= 1;
      }
    });

    return this.basket;
  }

}
