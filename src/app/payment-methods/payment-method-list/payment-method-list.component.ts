import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as PaymentMethodsActions from '@payment-methods/store/payment-methods.actions';
import { paymentMethodFeatureKey, PaymentMethodState } from '@payment-methods/store/payment-methods.reducer';
import { PaymentInvoice, PaymentMethod } from '@payment-methods/models/payment-method';
import { Router } from '@angular/router';
import { AlertsService } from '@shared/services/alerts-service.service';
import { AlertsModel } from '@shared/models/responseGeneric';


@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-method-list.component.html',
  styleUrls: ['./payment-method-list.component.css']
})
export class PaymentMethodListComponent implements OnInit {

  paymentInvoiceInput: PaymentInvoice = new PaymentInvoice();
  paymentMethod: PaymentMethod = new PaymentMethod();
  paymentMethods$: Observable<any>;
  paymentMethods: PaymentMethod[];

  constructor(private store: Store<PaymentMethodState>,
              private alertsService: AlertsService,
              private router: Router) {
  }

  ngOnInit() {
    this.getPaymentMethods();
  }

  getPaymentMethods() {
    this.store.dispatch(PaymentMethodsActions.searchAllPaymentMethods());
    this.paymentMethods$ = this.store.select(paymentMethodFeatureKey);
    this.paymentMethods$.subscribe(l => {
      const paymentMethodDefault: PaymentMethod = new PaymentMethod();
      this.paymentMethod.id = 0;
      this.paymentMethod.description = 'Seleccione';
      // paymentMethodDefault.id = 0;
      // paymentMethodDefault.description = 'Seleccione';
      this.paymentMethods = JSON.parse(JSON.stringify(l.responsePaymentMethod.paymentMethods));
      // this.paymentMethods.push(paymentMethodDefault);
    });
  }

  savePaymentMethods() {
    console.log('Log', this.paymentMethod);
    this.paymentInvoiceInput.paymentMethod = this.paymentMethod;
    console.log(this.paymentInvoiceInput);
    this.store.dispatch(PaymentMethodsActions.savePaymentInvoice({ paymentInvoiceInput: this.paymentInvoiceInput }));
    // this.paymentMethods$ = this.store.select(paymentMethodFeatureKey);
    // this.paymentMethods$.subscribe(l => this.paymentMethods = l.responsePaymentMethod.paymentMethods);
    // console.log(this.paymentMethodForm.value);
    // this.refreshComponent();
  }

  // Refrescar componente
  refreshComponent() {
    this.router.navigateByUrl('/refresh-component', { skipLocationChange: true }).then(() => {
      window.location.reload();
    });
  }
}
