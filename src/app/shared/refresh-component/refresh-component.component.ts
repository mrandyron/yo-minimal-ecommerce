import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-refresh-component',
  templateUrl: './refresh-component.component.html'
})
export class RefreshComponentComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  refreshPage() {
    this.   document.defaultView.location.reload();
  }

}
