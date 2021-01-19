import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ItemsActions from './items.actions';
import { ResponseItem } from '../models/item';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  constructor(private store: Store<ResponseItem>) {
  }

  // public searchItemsByWords(searchWords: string) {
  //   this.store.dispatch(ItemsActions.searchItemsByWords({ searchWord: searchWords }));
  // }

  // public getItemsMethods$(): Observable<ResponseItem> {
  //   return this.store.select(ItemsSelectors.getItemsMethods);
  // }

}
