import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    CatalogPageComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
  ],
})
export class RsShopModule { }
