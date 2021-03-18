import { Injectable } from '@angular/core';
import { Constants } from '@constants/constansts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseItem } from '@app/items/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private urlEndpoint = Constants.URL_ENDPOINT;
  private methodUrlGetItemsAll = 'items/get/item-all';
  private methodUrlGetItemsByWord = 'items/get/by/words/';
  private methodUrlGetItemsById = 'items/get/item-id/';

  constructor(private http: HttpClient) {
  }

  getItemsAll(): Observable<any> {
    return this.http.get(this.urlEndpoint + this.methodUrlGetItemsAll, { reportProgress: true }).pipe(
      map(response => {
        const responseObj = response as ResponseItem;
        return responseObj;
      })
    );
  }

  getItemById(id: number): Observable<ResponseItem> {
    return this.http.get<ResponseItem>(this.urlEndpoint + this.methodUrlGetItemsById + id);
  }

  getItemsByWords(word: string): Observable<ResponseItem> {
    return this.http.get<ResponseItem>(this.urlEndpoint + this.methodUrlGetItemsByWord + word);
  }

}
