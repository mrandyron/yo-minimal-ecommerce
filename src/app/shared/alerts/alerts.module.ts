import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertTopComponent } from '@shared/alerts/alert-top/alert-top.component';


@NgModule({
  declarations: [AlertTopComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlertTopComponent
  ]
})
export class AlertsModule {
}
