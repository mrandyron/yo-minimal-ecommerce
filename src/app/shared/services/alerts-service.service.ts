import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertsModel } from '@shared/models/responseGeneric';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  public alertModel$: Observable<AlertsModel>;
  public alertModel: AlertsModel = new AlertsModel();

  constructor() {
    this.alertModel$ = new Observable<AlertsModel>(observer => {
      this.alertModel.isShow = true;
      observer.next(this.alertModel);
    });
  }

  putAlert(alertModel: AlertsModel) {
    alertModel.classCcs = 'alert-info';
    this.alertModel$ = new Observable<AlertsModel>(observer => {
      observer.next(alertModel);
    });
    console.log(this.alertModel$);
    this.getAlert();
  }

  getAlert(): Observable<AlertsModel> {
    console.log('this.alertModel$ get');
    console.log(this.alertModel$);
    return this.alertModel$;
  }
}
