import {NgModule} from '@angular/core';
import {BannerPromotionsComponent} from '@app/banner-promotions/banner-promotions.component';


@NgModule({
  declarations: [
    BannerPromotionsComponent
  ],
  exports: [
    BannerPromotionsComponent
  ]
})
export class BannerPromotionsModule {
}
