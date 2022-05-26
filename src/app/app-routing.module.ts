import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarouselfeedComponent } from '../app/carousel/carouselfeed/carouselfeed.component';

const routes: Routes = [
  {path:'carousel',
   loadChildren: () => import('./carousel/carousel.module').then(m => m.CarouselModule)},
   { 
    path: 'add-to-cart-modal', 
    loadChildren: () => import(`./add-to-cart-modal/add-to-cart-modal.module`).then(
      module => module.AddToCartModalModule
    )
  },
  {
    path: '',
    redirectTo: 'carousel',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
