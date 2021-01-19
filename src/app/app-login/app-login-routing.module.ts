import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormLoginComponent} from '@app-login/form-login/form-login.component';
import {FormSignInComponent} from '@app-login/form-sign-in/form-sign-in.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: FormLoginComponent
      },
      {
        path: 'sign-in', component: FormSignInComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLoginRoutingModule {
}
