import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';

import * as ItemsActions from './items.actions';
import { Constants } from '@constants/constansts';
import { ResponseItem } from '@app/items/models/item';


@Injectable()
export class ItemsEffects {

  private urlEndpoint = Constants.URL_ENDPOINT;
  private methodUrlGetItemsAll = 'items/get/item-all';
  private methodUrlGetItemsByWord = 'items/get/by/words/';

  constructor(private actions$: Actions,
              private http: HttpClient) {

  }

  @Effect()
  public searchItemsByWords = createEffect(() => this.actions$.pipe(
    ofType(ItemsActions.searchItemsByWords),
    concatMap(action => this.http.get<ResponseItem>
    (this.urlEndpoint + this.methodUrlGetItemsByWord + action.searchWord).pipe(
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
    concatMap(action => this.http.get<ResponseItem>
    (this.urlEndpoint + this.methodUrlGetItemsAll, { reportProgress: true }).pipe(
      map(res =>
        ItemsActions.loadItemsSuccess({ responseItem: res })
      ),
      catchError(err =>
        of(ItemsActions.loadItemsError({ responseItem: err }))
      )
    ))));

}
