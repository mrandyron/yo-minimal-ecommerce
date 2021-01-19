import { createAction, props } from '@ngrx/store';
import { PaymentInvoice, ResponsePaymentMethod } from '@payment-methods/models/payment-method.ts';


export const searchAllPaymentMethods = createAction(
  '[PaymentMethod] Search All Payment Methods'
);

export const savePaymentInvoice = createAction(
  '[PaymentMethod] Save paymentInvoice',
  props < { paymentInvoiceInput: PaymentInvoice } >()
);

export const loadPaymentMethodSuccess = createAction(
  '[PaymentMethod] Load PaymentMethod Success',
  props<{ responsePaymentMethod: ResponsePaymentMethod }>()
);

export const loadPaymentMethodError = createAction(
  '[PaymentMethod] Load PaymentMethod Error',
  props<{ responsePaymentMethod: ResponsePaymentMethod }>()
);
