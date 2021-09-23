import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { SharedModule } from '../shared/shared.module';
import { GoodsOfCategoryPageComponent } from './pages/goods-of-category-page/goods-of-category-page.component';
import { DetailedGoodsPageComponent } from './pages/detailed-goods-page/detailed-goods-page.component';
import { AvailableAmountDirective } from './directives/available-amount.directive';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { WaitingListPageComponent } from './pages/waiting-list-page/waiting-list-page.component';
import { IsInCartDirective } from './directives/is-in-cart.directive';
import { IsFavoriteDirective } from './directives/is-favorite.directive';

@NgModule({
  declarations: [
    MainPageComponent,
    CatalogPageComponent,
    GoodsOfCategoryPageComponent,
    DetailedGoodsPageComponent,
    AvailableAmountDirective,
    CartPageComponent,
    FavoritePageComponent,
    WaitingListPageComponent,
    IsInCartDirective,
    IsFavoriteDirective,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    MatExpansionModule,
  ],
})
export class RsShopModule { }
