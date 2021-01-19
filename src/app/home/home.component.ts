import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { itemsMethodFeatureKey, ItemsMethodsState } from '@app/items/store/items.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ResponseItem } from '@app/items/models/item';
import { ItemListComponent } from '@app/items/item-list/item-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items$: Observable<any>;
  itemsGreaterZero = false;
  @ViewChild(ItemListComponent, { static: false }) itemListVar: ItemListComponent;

  constructor(private store: Store<ItemsMethodsState>) {
  }

  ngOnInit() {
    this.items$ = this.store.select(itemsMethodFeatureKey);
    this.items$.subscribe(
      response => {
        let responseItem: ResponseItem;
        responseItem = response.responseItem;
        this.itemsGreaterZero = responseItem.items.length > 0;
      }
    );
  }

}
