import {NgModule} from '@angular/core';
import {BannerAdsComponent} from '@banner-ads/banner-ads.component';

@NgModule({
  declarations: [
    BannerAdsComponent
  ],
  exports: [
    BannerAdsComponent
  ]
})
export class BannerAdsModule {
}
