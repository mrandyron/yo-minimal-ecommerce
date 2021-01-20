import { Component } from '@angular/core';
import { AlertsModel } from '@shared/models/responseGeneric';

@Component({
  selector: 'app-alert-top',
  templateUrl: './alert-top.component.html',
  styleUrls: ['./alert-top.component.css']
})
export class AlertTopComponent {

  alertModel: AlertsModel = new AlertsModel();

  constructor() {
  }
}
