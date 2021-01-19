import {Status} from './status';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '@environments/environment';

export class Constants {

  public static STATUS_ITEMS: Array<Status> = [
    {statusId: 'A', nameStatus: 'Activo'},
    {statusId: 'D', nameStatus: 'Desactivado'},
    {statusId: 'N', nameStatus: 'No Web'}
  ];

  public static IMAGE_NOT_DISP = 'nodisp.png';
  public static PHOTO_CUSTOMER = 'PHOTO_CUSTOMER';
  public static PHOTO_ITEM = 'PHOTO_ITEM';
  public static CUST_TYPE = 'custType';
  public static ITEM_TYPE = 'itemType';
  public static DEFAULT_ITEM_IMAGE = '../../assets/default-images/nodispItem.png';
  public static DEFAULT_CUSTOMER_IMAGE = '../../assets/default-images/nodispCustomer.png';
  public static COD_RES_OK = 201;
  public static COD_HTTP_OK = 302;

  public static COD_USD = 2;
  public static LOCALE_BS = 'Bs.';
  public static LOCALE_USD = '$';
  public static CASH_TYPE = 'cash';
  public static POST_TYPE = 'post';
  public static EBANK_TYPE = 'eBank';
  public static CHECK_TYPE = 'check';
  public static CUSTOMER_CREDIT = 'customerCreditId';
  public static TYPE_INVOICE_REFUND = 'R';
  public static TYPE_INVOICE_INVOICE = 'I';

  public static HTTP_HEADERS = new HttpHeaders({
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'
  });

  public static URL_ENDPOINT = environment.urlEndpoint;

  public static PAGE_NO = 1;
  public static ITEMS_PER_PAGE = 10;
  public static PREVIOUS_LABEL = 'Previo';
  public static FIRST_LABEL = 'Primero';
  public static LAST_LABEL = 'Ultimo';
  public static NEXT_LABEL = 'Siguiente';

  public static SUCCESS = 'success';
  public static WARNING = 'warning';
  public static INFO = 'info';
  public static ERROR = 'error';
  public static SUCCESS_WOR = 'success-wor';
  public static MODAL_INVOICE = 'modal-invoice';


  public static MESSAGE_TITTLE_ERROR = 'Se ha producido el siguiente error: ';
  public static MESSAGE_TITTLE_WARNING = 'Advertencia: ';
  public static MESSAGE_TITTLE_INFO = 'Información: ';

  public static SUPPORT_TI = 'comunicarse con personal de Soporte ';

  public static MESSAGE_DATA_NOT_FOUND = 'No se encontró la información suministrada: ';
  public static MESSAGE_UNAUTHORIZED = 'Falla en la autenticación, intente nuevamente ';
  public static MESSAGE_BAD_REQUEST = 'Se ha producido un error en los datos enviados al servidor ';
  public static MESSAGE_SERVER_ERROR = 'Se ha producido un error en el servidor, ' + Constants.SUPPORT_TI;
  public static MESSAGE_BAD_GATEWAY = 'Se obtuvo una respuesta invalida, ' + Constants.SUPPORT_TI;
  public static MESSAGE_SERVICE_UNAVAILABLE = 'El servidor no esta disponible, ' + Constants.SUPPORT_TI;

}

