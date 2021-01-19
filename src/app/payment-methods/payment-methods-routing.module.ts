import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentMethodListComponent } from '@payment-methods/payment-method-list/payment-method-list.component';

const routes: Routes = [
  {
    path: 'payment-methods', component: PaymentMethodListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PaymentMethodsRoutingModule {
}
