import {Injectable} from '@angular/core';
import {Item} from '@app/items/models/item';
import {Observable, throwError} from 'rxjs';
import {Constants} from '@constants/constansts';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private urlEndpoint = Constants.URL_ENDPOINT;
  private methodLoadCPhoto = 'image/get/upload/';

  constructor(private http: HttpClient) {
  }

  /*** View Photo Item ***/
  getImage(item: Item): Observable<any> {
    let fileName = item.imageName;

    (fileName === null || fileName === '') ? fileName = Constants.IMAGE_NOT_DISP : fileName = fileName;

    const localeUrl = fileName + '/' + Constants.PHOTO_ITEM;
    return this.http.get(this.urlEndpoint + this.methodLoadCPhoto + localeUrl,
      {
        headers: Constants.HTTP_HEADERS
        , observe: 'response'
        , responseType: 'text'
      }
    ).pipe(
      catchError(err => {
        console.log('Error en el procesamiento de la imágen');
        return throwError(err);
      })
    );
  }
}
