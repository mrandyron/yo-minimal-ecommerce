import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, concatMap, distinct, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';

import * as PaymentMethodActions from './payment-methods.actions';
import { Constants } from '@constants/constansts';
import { ResponsePaymentMethod } from '@payment-methods/models/payment-method.ts';
import { TranslateService } from '@ngx-translate/core';
import { PaymentMethodsService } from '@payment-methods/payment-methods.service';


@Injectable()
export class PaymentMethodsEffects {

  private urlEndpoint = Constants.URL_ENDPOINT;
  private methodUrlGetPaymentMethodsAll = 'payment/method/get/all';

  constructor(private actions$: Actions,
              private http: HttpClient,
              public translate: TranslateService,
              private paymentMethodsService: PaymentMethodsService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
  }


  @Effect()
  public getPaymentMethodAll = createEffect(() => this.actions$.pipe(
    ofType(PaymentMethodActions.searchAllPaymentMethods),
    concatMap(action => this.http.get<ResponsePaymentMethod>
    (this.urlEndpoint + this.methodUrlGetPaymentMethodsAll, { reportProgress: true }).pipe(
      map(res => PaymentMethodActions.loadPaymentMethodSuccess({ responsePaymentMethod: res })
      ),
      catchError(err =>
        of(PaymentMethodActions.loadPaymentMethodError({ responsePaymentMethod: err }))
      )
    ))));

  @Effect()
  public savePaymentInvoice = createEffect(() => this.actions$.pipe(
    ofType(PaymentMethodActions.savePaymentInvoice),
    distinct(action => action.paymentInvoiceInput),
    concatMap(action =>
      this.paymentMethodsService.createPaymentInvoice(action.paymentInvoiceInput)
        .pipe(
          map(res =>
            PaymentMethodActions.loadPaymentMethodSuccess({ responsePaymentMethod: res })
          ),
          catchError(err =>
            of(PaymentMethodActions.loadPaymentMethodError({ responsePaymentMethod: err }))
          )
        )
    )
    )
  );

}
