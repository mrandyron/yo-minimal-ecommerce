import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RefreshComponentComponent } from '@shared/refresh-component/refresh-component.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./app-login/app-login.module').then(m => m.AppLoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  // {path: 'admin', component: AdminComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  // {path: 'user', component: UserComponent, canActivate: [guard], data: {expectedRol: ['user']}},
  {path: 'refresh-component', component: RefreshComponentComponent},
  {
    path: 'items-module',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  },
  {
    path: 'banner-top-item',
    loadChildren: () => import('./banner-top-item/banner-top.module').then(m => m.BannerTopItemModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payment-methods/payment-methods.module').then(m => m.PaymentMethodsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
