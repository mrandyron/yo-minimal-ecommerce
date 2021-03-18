import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from '@app/items/item-list/item-list.component';
import { ItemDetailComponent } from '@app/items/item-detail/item-detail.component';

const routes: Routes = [
  {
    path: 'items',
    children: [
      {
        path: '', component: ItemListComponent
      }
    ]
  },
  {
    path: 'item-detail',
    children: [
      {
        path: ':id', component: ItemDetailComponent
      }, {
        path: '', component: ItemDetailComponent
      }
    ]
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
