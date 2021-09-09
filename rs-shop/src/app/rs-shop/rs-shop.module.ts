import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { SharedModule } from '../shared/shared.module';
import { GoodsOfCategoryPageComponent } from './pages/goods-of-category-page/goods-of-category-page.component';
import { DetailedGoodsPageComponent } from './pages/detailed-goods-page/detailed-goods-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    CatalogPageComponent,
    GoodsOfCategoryPageComponent,
    DetailedGoodsPageComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    SharedModule,
  ],
})
export class RsShopModule { }
