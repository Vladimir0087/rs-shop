import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { MainPageComponent } from './rs-shop/pages/main-page/main-page.component';
import { CatalogPageComponent } from './rs-shop/pages/catalog-page/catalog-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'mainpage', component: MainPageComponent },
  { path: '', redirectTo: 'mainpage', pathMatch: 'full' },
  { path: 'catalog', component: CatalogPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
