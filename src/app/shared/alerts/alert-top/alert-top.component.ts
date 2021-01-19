import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import { AlertsService } from '@shared/services/alerts-service.service';
import { AlertsModel } from '@shared/models/responseGeneric';
import { Observable } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-top',
  templateUrl: './alert-top.component.html',
  styleUrls: ['./alert-top.component.css']
})
export class AlertTopComponent {

  alertModel: AlertsModel = new AlertsModel();
  closeResult: string;

  constructor(private modalService: NgbModal) {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
