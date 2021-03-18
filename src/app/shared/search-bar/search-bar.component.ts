import { Component, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import * as ItemsActions from '@app/items/store/items.actions';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

import { Item, ResponseItem } from '@app/items/models/item';
import { Store } from '@ngrx/store';
import { itemsMethodFeatureKey, ItemsMethodsState } from '@app/items/store/items.reducer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @ViewChild('instance', { static: true }) instance: NgbTypeahead;
  public items$: Observable<any>;
  searching = false;
  searchFailed = false;
  word = '';
  items: Item[];

  constructor(private store: Store<ItemsMethodsState>,
              private router: Router) {
  }

  search = ((text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.searchWord().pipe(
          map((response) => {
            const nameItems = [];
            this.searchFailed = false;
            nameItems.push(term.valueOf().toUpperCase());
            this.word = term;
            let responseItem: ResponseItem;
            responseItem = response.responseItem;
            responseItem.items.forEach(i => {
              nameItems.push(i.nameMedia);
            });
            return nameItems;
          }),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    ));

  searchWord(): Observable<any> {
    if (this.word.length >= 3) {
      this.store.dispatch(ItemsActions.searchItemsByWords({ searchWord: this.word }));
      this.router.navigate(['/items-module/items']);
      return this.items$ = this.store.select(itemsMethodFeatureKey);
    } else {
      return this.items$ = this.store.select(itemsMethodFeatureKey);
    }
  }
}
