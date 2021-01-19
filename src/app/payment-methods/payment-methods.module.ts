import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as PaymentMethodReducer from '@payment-methods/store/payment-methods.reducer';

import { SharedModule } from '@shared/shared.module';
import { PaymentMethodListComponent } from '@payment-methods/payment-method-list/payment-method-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PaymentMethodListComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature(
      PaymentMethodReducer.paymentMethodFeatureKey,
      PaymentMethodReducer.reducer
    )
  ],
  exports: [
    PaymentMethodListComponent
  ]
})
export class PaymentMethodsModule {
}
