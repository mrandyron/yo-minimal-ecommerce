import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppLoginRoutingModule} from '@app-login/app-login-routing.module';
import {FormLoginComponent} from './form-login/form-login.component';
import {FormSignInComponent} from './form-sign-in/form-sign-in.component';



@NgModule({
  declarations: [
    FormLoginComponent,
    FormSignInComponent
  ],
  imports: [
    CommonModule,
    AppLoginRoutingModule
  ],
  exports: [
    FormLoginComponent,
    FormSignInComponent
  ]
})
export class AppLoginModule {
}
