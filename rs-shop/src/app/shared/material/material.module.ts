import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  exports: [
    MatMenuModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
})
export class MaterialModule { }
