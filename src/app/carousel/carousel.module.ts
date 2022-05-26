import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselfeedComponent } from './carouselfeed/carouselfeed.component';
import { TnMerchandisingCarouselDataService } from '../services/tn-merchandising-carousel-data.service';
import { ProductDataUtilService } from '../product-data-util.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: CarouselfeedComponent
}]

@NgModule({
  declarations: [
    CarouselfeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TnMerchandisingCarouselDataService,
    ProductDataUtilService
  ],
  exports: [CarouselfeedComponent]
})
export class CarouselModule { }
