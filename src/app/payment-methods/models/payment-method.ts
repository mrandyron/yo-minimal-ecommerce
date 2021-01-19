export class PaymentMethod {
  id: number;
  description: string;
  user: string;
  createDate: string;
  updateDate: string;
}

export class PaymentInvoice {
  paymentMethod: PaymentMethod;
  amount: number;
  reference: string;
  createDate: string;
  user: string;
}

export class ResponsePaymentMethod {
  paymentMethods: PaymentMethod[];
  paymentMethod: PaymentMethod;
  paymentInvoice: PaymentInvoice;
  paymentInvoices: PaymentInvoice[];
  cod: string;
  message: string;
}
