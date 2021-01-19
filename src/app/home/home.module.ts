import {NgModule} from '@angular/core';
import {HomeComponent} from '@app/home/home.component';
import {BannerAdsModule} from '@banner-ads/banner-ads.module';
import {BannerTopItemModule} from '@banner-top-item/banner-top.module';
import {BannerPromotionsModule} from '@app/banner-promotions/banner-promotions.module';
import {DiscoveryModule} from '@app/discovery/discovery.module';
import {HomeRoutingModule} from '@app/home/home-routing.module';
import { ItemsModule } from '@app/items/items.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerAdsModule,
    BannerTopItemModule,
    BannerPromotionsModule,
    DiscoveryModule,
    ItemsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
