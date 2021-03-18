import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';

import * as ItemsActions from './items.actions';
import { Constants } from '@constants/constansts';
import { ResponseItem } from '@app/items/models/item';
import { ItemsService } from '@app/items/items.service';


@Injectable()
export class ItemsEffects {

  constructor(private actions$: Actions,
              private http: HttpClient,
              private itemsService: ItemsService) {

  }

  @Effect()
  public searchItemsByWords = createEffect(() => this.actions$.pipe(
    ofType(ItemsActions.searchItemsByWords),
    concatMap(action =>
      this.itemsService.getItemsByWords(action.searchWord).pipe(
        map(res =>
          ItemsActions.loadItemsSuccess({ responseItem: res })
        ),
        catchError(err =>
          of(ItemsActions.loadItemsError({ responseItem: err }))
        )
      ))));

  @Effect()
  public getItemsAll = createEffect(() => this.actions$.pipe(
    ofType(ItemsActions.searchAllItems),
    concatMap(action => this.itemsService.getItemsAll().pipe(
      map(res =>
        ItemsActions.loadItemsSuccess({ responseItem: res })
      ),
      catchError(err =>
        of(ItemsActions.loadItemsError({ responseItem: err }))
      )
    ))));

  @Effect()
  public searchItemsById = createEffect(() => this.actions$.pipe(
    ofType(ItemsActions.searchItemsById),
    concatMap(action =>
      this.itemsService.getItemById(action.id).pipe(
        map(res =>
          ItemsActions.loadItemsSuccess({ responseItem: res })
        ),
        catchError(err =>
          of(ItemsActions.loadItemsError({ responseItem: err }))
        )
      ))));

}
