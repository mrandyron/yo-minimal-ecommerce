import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeEsVe from '@angular/common/locales/es-VE';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { HomeModule } from '@app/home/home.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppLoginModule } from '@app-login/app-login.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '@environments/environment.prod';
import { ItemsEffects } from '@app/items/store/items.effects';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { PaymentMethodsEffects } from '@payment-methods/store/payment-methods.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertsModule } from '@shared/alerts/alerts.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

registerLocaleData(localeEsVe, 'es');

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    AlertsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    // El DevTools Se puede quitar en PRD quitando esta linea.
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    EffectsModule.forRoot([ItemsEffects, PaymentMethodsEffects]),
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HomeModule,
    AppLoginModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    },
    {
      provide: APP_BASE_HREF, useValue: '/yo-minimal/ecommerce'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
