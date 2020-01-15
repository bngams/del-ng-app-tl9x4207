import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [
  ],
  imports: [
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
