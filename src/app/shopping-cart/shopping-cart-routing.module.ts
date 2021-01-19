import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartListComponent } from '@shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'basket', component: ShoppingCartListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule {
}

