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

  @ViewChild('sidebar', { static: false }) buttonSideBarCollapse: ElementRef;
  @ViewChild(AlertTopComponent, { static: false }) alertTopComponent: AlertTopComponent;
  @Input() inHome: boolean;

  toggleClass = '';
  items: Array<Item>;
  basket: Array<Item>;
  items$: Observable<any>;
  basket$: Observable<any>;
  alertsModel: AlertsModel = new AlertsModel();

  image: string;
  PHOTO_ITEM = Constants.PHOTO_ITEM;

  public urlEndpoint = Constants.URL_ENDPOINT;
  public methodLoadCPhoto = 'image/get/upload/';

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

  getAllItems() {
    this.items$ = this.store.select(itemsMethodFeatureKey);
    // Activar en caso de requerir paginado y replicar en el resto del proyecto donde se requiera
    // this.itemsByPagination('0', this.itemsPerPage.toString());
    this.items$.subscribe(
      response => {
        let responseItem: ResponseItem;
        responseItem = response.responseItem;
        this.items = responseItem.items;
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

    // this.alertsModel = new AlertsModel();
    this.alertsModel.classCcs = 'alert-danger';
    this.alertsModel.message = 'Se agrego al carrito => '.concat(item.nameMedia);
    this.alertsModel.isShow = false;
    this.alertTopComponent.alertModel = this.alertsModel;
    setTimeout(() => {
      this.alertsModel = new AlertsModel();
      this.alertsModel.isShow = true;
      this.alertTopComponent.alertModel = this.alertsModel;
      console.log('ejecutando');
    }, 1000);


  }
}
