import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as ItemsReducer from '@app/items/store/items.reducer';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemListComponent } from '@app/items/item-list/item-list.component';
import { SharedModule } from '@shared/shared.module';
import { AlertsModule } from '@shared/alerts/alerts.module';
import { ItemDetailComponent } from './item-detail/item-detail.component';


@NgModule({
  declarations: [
    ItemListComponent,
    ItemDetailComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule,
    StoreModule.forFeature(
      ItemsReducer.itemsMethodFeatureKey,
      ItemsReducer.reducer
    ),
    AlertsModule
  ],
  exports: [
    ItemListComponent
  ]
})
export class ItemsModule {
}
