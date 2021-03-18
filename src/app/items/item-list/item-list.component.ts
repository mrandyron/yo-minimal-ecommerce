import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Item, ResponseItem } from '@app/items/models/item';
import { Constants } from '@constants/constansts';
import { Store } from '@ngrx/store';

import * as ShoppingCartActions from '@app/shopping-cart/store/shopping-cart.actions';

import { itemsMethodFeatureKey, ItemsMethodsState } from '@app/items/store/items.reducer';
import { itemFeatureKey, ShoppingCartItemState } from '@app/shopping-cart/store/shopping-cart.reducer';

import { Observable } from 'rxjs';
import { AlertsModel } from '@shared/models/responseGeneric';
import { AlertTopComponent } from '@shared/alerts/alert-top/alert-top.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @ViewChild('sidebar') buttonSideBarCollapse: ElementRef;
  @ViewChild(AlertTopComponent) alertTopComponent: AlertTopComponent;
  @Input() inHome: boolean;

  toggleClass = '';
  items: Array<Item>;
  basket: Array<Item>;
  items$: Observable<any>;
  basket$: Observable<any>;
  alertsModel: AlertsModel = new AlertsModel();

  // Pagination
  config: any = {
    itemsPerPage: Constants.ITEMS_PER_PAGE,
    totalItems: 0,
    currentPage: Constants.PAGE_NO,
    boundaryLinks: true,
    rotate: true,
    firstLabel: Constants.FIRST_LABEL,
    lasLabel: Constants.LAST_LABEL,
    previousLabel: Constants.PREVIOUS_LABEL,
    nextLabel: Constants.NEXT_LABEL
  };

  image: string;
  PHOTO_ITEM = Constants.PHOTO_ITEM;

  public urlEndpoint = Constants.URL_ENDPOINT;
  public methodLoadCPhoto = 'image/get/upload/';
  public classLabel: string;

  constructor(private store: Store<ItemsMethodsState>,
              private storeShoppingCart: Store<ShoppingCartItemState>) {
  }

  ngOnInit() {
    this.getAllItems();
  }

  collapseSideBar(): void {
    if (this.toggleClass === 'active') {
      this.toggleClass = '';
    } else {
      this.toggleClass = 'active';
    }
  }

  getAllItems(): void {
    this.items$ = this.store.select(itemsMethodFeatureKey);
    // Activar en caso de requerir paginado y replicar en el resto del proyecto donde se requiera
    // this.itemsByPagination('0', this.itemsPerPage.toString());
    this.items$.subscribe(
      response => {
        let responseItem: ResponseItem;
        responseItem = response.responseItem;
        this.items = responseItem.items;
        this.config.totalItems = this.items.length;
        // this.progressBarComponentVar.isProgressActive = true;
        // this.config.totalItems = this.items.length;
        // this.orderItemsByDateDesc();
      }
    );
  }

  sendItemToShoppingCart(itemAdd: Item) {
    this.basket$ = this.storeShoppingCart.select(itemFeatureKey);
    this.basket$.subscribe(
      response => {
        this.basket = response;
        this.putAlert(itemAdd);
      }
    );
    this.storeShoppingCart.dispatch(ShoppingCartActions.addItemToShoppingCart({ basket: this.basket, item: itemAdd }));
  }

  putAlert(item: Item) {
    this.alertTopComponent.alertModel.classCcs = 'bg-headers';
    this.alertTopComponent.alertModel.message = 'Agregado => '.concat(item.nameMedia);
    this.alertTopComponent.alertModel.isShow = true;

    setTimeout(() => {
      this.alertTopComponent.alertModel.isShow = false;
    }, 2000);
  }

  setStockColor(stock: number): string {

    let classBadge = '';

    if (stock >= 1 && stock <= 4) {
      classBadge = 'danger';
      this.classLabel = 'Stock Bajo';
    } else if (stock >= 5 && stock <= 19) {
      classBadge = 'warning';
      this.classLabel = 'Stock Medio';
    } else {
      classBadge = 'success';
      this.classLabel = 'Stock Alto';
    }

    return classBadge;
  }
}
