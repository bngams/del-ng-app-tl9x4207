import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductDashboardComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductDashboardComponent
  ],
})
export class ProductModule { }
