import { Component, Input } from '@angular/core';
import { AlertsService } from '@shared/services/alerts-service.service';
import { AlertsModel } from '@shared/models/responseGeneric';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() alertsModel: AlertsModel = new AlertsModel();
  alertModel$ = new Observable<AlertsModel>(() => {
    console.log('this.alertsService.getAlert().subscribe()');
    console.log(this.alertsService.getAlert().subscribe());
    return this.alertsService.getAlert().subscribe();
  });

  constructor(private alertsService: AlertsService) {
  }

  ngChangeAlertsEmmit($event) {
    this.alertsModel = $event;
  }
}
