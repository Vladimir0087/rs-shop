import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatSelectModule,
  ],
  exports: [
    MatMenuModule,
    MatSelectModule,
  ],
})
export class MaterialModule { }
