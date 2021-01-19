import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ShoppingCartRoutingModule } from '@shopping-cart/shopping-cart-routing.module';
import { ShoppingCartListComponent } from '@shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { StoreModule } from '@ngrx/store';
import * as shoppingCartReducer from '@app/shopping-cart/store/shopping-cart.reducer';
import { PaymentMethodsModule } from '@payment-methods/payment-methods.module';

@NgModule({
  declarations: [ShoppingCartListComponent],
  imports: [
    SharedModule,
    ShoppingCartRoutingModule,
    PaymentMethodsModule,
    CommonModule,
    StoreModule.forFeature(
      shoppingCartReducer.itemFeatureKey,
      shoppingCartReducer.reducer
    )
  ],
  exports: [ShoppingCartListComponent]
})
export class ShoppingCartModule {
}
