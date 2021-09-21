import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { MainPageComponent } from './rs-shop/pages/main-page/main-page.component';
import { CatalogPageComponent } from './rs-shop/pages/catalog-page/catalog-page.component';
import { GoodsOfCategoryPageComponent } from './rs-shop/pages/goods-of-category-page/goods-of-category-page.component';
import { DetailedGoodsPageComponent } from './rs-shop/pages/detailed-goods-page/detailed-goods-page.component';
import { CartPageComponent } from './rs-shop/pages/cart-page/cart-page.component';
import { FavoritePageComponent } from './rs-shop/pages/favorite-page/favorite-page.component';
import { WaitingListPageComponent } from './rs-shop/pages/waiting-list-page/waiting-list-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'mainpage', component: MainPageComponent },
  { path: '', redirectTo: 'mainpage', pathMatch: 'full' },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'favorite', component: FavoritePageComponent },
  { path: 'waiting-list', component: WaitingListPageComponent },
  { path: ':categoryId/:subCategoryId', component: GoodsOfCategoryPageComponent },
  { path: ':categoryId/:subCategoryId/:goodsId', component: DetailedGoodsPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
