import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateIntoComponentsService {
  keyTranslated = '';

  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
  }

  /***
   * @param keyToSearch key a buscar en los archivos translate; Ejemplo 'GENERIC_TEXT.LABEL_TOTAL'
   * @description Se usa los valores del o los archivos translate dentro de un archivo .ts
   ***/
  getKeyTranslate(keyToSearch: string): string {
    this.translate.get(keyToSearch, '').subscribe(t => {
      this.keyTranslated = t;
    });
    return this.keyTranslated;
  }
}
