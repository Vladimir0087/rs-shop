import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfoBlockComponent } from './header/components/info-block/info-block.component';
import { NavigationBlockComponent } from './header/components/navigation-block/navigation-block.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InfoBlockComponent,
    NavigationBlockComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class CoreModule { }
