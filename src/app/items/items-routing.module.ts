import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ItemListComponent} from '@app/items/item-list/item-list.component';

const routes: Routes = [
  {
    path: 'items', component: ItemListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
}
