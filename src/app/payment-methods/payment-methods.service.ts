import { Injectable } from '@angular/core';
import { PaymentInvoice, ResponsePaymentMethod } from '@payment-methods/models/payment-method';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from '@constants/constansts';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {

  private urlEndpoint = Constants.URL_ENDPOINT;
  private methodUrlSavePaymentInvoice = 'payment/method/post/invoice';

  constructor(private http: HttpClient) {
  }

  /************
   * @paymentInvoice Objeto de entrada que lleva los metodos de pagos a una factura creada
   * @ResponsePaymentMethod Objeto con Codigo y Mensaje de la peticion
   * @Autor Andy Cevallos
   * @CreateDate 12/01/2021
   * @UpdateDate 13/01/2021
   * @Comment Se agrega nuevo atributo en el objeto PaymentInvoice 13/01/2021
   **********/
  public createPaymentInvoice(paymentInvoice: PaymentInvoice): Observable<ResponsePaymentMethod> {
    console.log('Servicio');
    const formData = new FormData();
    formData.append('paymentInvoiceInput', JSON.stringify(paymentInvoice));
    return this.http.post<any>(this.urlEndpoint + this.methodUrlSavePaymentInvoice, formData,
      { headers: Constants.HTTP_HEADERS });
  }
}
