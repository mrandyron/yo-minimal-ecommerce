import { Action, createReducer, on } from '@ngrx/store';
import * as PaymentMethodActions from './payment-methods.actions';
import { ResponsePaymentMethod } from '@payment-methods/models/payment-method.ts';

export const paymentMethodFeatureKey = 'responsePaymentMethod';

export interface PaymentMethodState {
  responsePaymentMethod: ResponsePaymentMethod;
}

export const initialState: PaymentMethodState = {
  responsePaymentMethod: { paymentMethods: [], paymentMethod: null, paymentInvoice: null, paymentInvoices: [], cod: '', message: '' }
};

const paymentMethodsReducer = createReducer(
  initialState,
  on(PaymentMethodActions.searchAllPaymentMethods, state => state),
  on(PaymentMethodActions.savePaymentInvoice,
    (state, { paymentInvoiceInput }) => {
      return {
        ...state,
        responsePaymentMethod: { ...state.responsePaymentMethod, input: paymentInvoiceInput }
      };
    }
  ),
  on(PaymentMethodActions.loadPaymentMethodSuccess, (state, payload) => ({
    ...state,
    responsePaymentMethod: payload.responsePaymentMethod
  })),
  on(PaymentMethodActions.loadPaymentMethodError, state => state)
);

export function reducer(state: PaymentMethodState | undefined, action: Action) {
  return paymentMethodsReducer(state, action);
}

