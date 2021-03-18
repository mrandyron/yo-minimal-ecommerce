import { Component, OnInit } from '@angular/core';
import { Constants } from '@constants/constansts';
import { Item, ResponseItem } from '@app/items/models/item';
import { Store } from '@ngrx/store';
import { itemsMethodFeatureKey, ItemsMethodsState } from '@app/items/store/items.reducer';
import { Observable } from 'rxjs';
import * as ItemsActions from '@app/items/store/items.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  id: number;
  item$: Observable<any>;
  item: Item = new Item();
  image: string;
  PHOTO_ITEM = Constants.PHOTO_ITEM;
  public urlEndpoint = Constants.URL_ENDPOINT;
  public methodLoadCPhoto = 'image/get/upload/';

  selected = 0;
  hovered = 0;
  readonly = false;

  constructor(private store: Store<ItemsMethodsState>,
              private activateRoute: ActivatedRoute) {
    this.getItemById();
  }

  ngOnInit() {

  }

  getItemById(): void {
    this.getIdFromUrlParam();
    this.store.dispatch(ItemsActions.searchItemsById({ id: this.id }));
    this.item$ = this.store.select(itemsMethodFeatureKey);
    this.item$.subscribe(
      response => {
        let responseItem: ResponseItem;
        responseItem = response.responseItem;
        this.item = responseItem.item;
        // this.progressBarComponentVar.isProgressActive = true;
        // this.config.totalItems = this.items.length;
        // this.orderItemsByDateDesc();
      });
  }

  getIdFromUrlParam(): void {
    this.activateRoute.params.subscribe(params => {
        const id = params.id;
        if (id) {
          this.id = id;
        }
      }
    );
  }

}
