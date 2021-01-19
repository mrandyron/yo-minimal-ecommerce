import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from '@shared/search-bar/search-bar.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { CategoryItemsComponent } from '@shared/category-items/category-items.component';
import { HeaderComponent } from '@shared/header/header.component';
import { SideBarComponent } from '@shared/side-bar/side-bar.component';
import { ItemsService } from '@app/items/items.service';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as shoppingCartReducer from '@shopping-cart/store/shopping-cart.reducer';
import { TranslateModule } from '@ngx-translate/core';
import { ImageLazyLoadingDirective } from './directives/image-lazy-loading.directive';
import { RefreshComponentComponent } from './refresh-component/refresh-component.component';
import { AlertsService } from '@shared/services/alerts-service.service';

@NgModule({
  declarations: [
    CategoryItemsComponent,
    FooterComponent,
    HeaderComponent,
    SearchBarComponent,
    SideBarComponent,
    FooterComponent,
    ImageLazyLoadingDirective,
    RefreshComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    StoreModule.forFeature(
      shoppingCartReducer.itemFeatureKey,
      shoppingCartReducer.reducer
    )
  ],
  exports: [
    TranslateModule,
    HeaderComponent,
    CategoryItemsComponent,
    FooterComponent,
    SideBarComponent,
    SearchBarComponent
  ],
  providers: [
    ItemsService,
    AlertsService
  ]
})
export class SharedModule {
}
