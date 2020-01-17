import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

// app-routing => /products
const routes: Routes = [
  { path: '', component: ProductDashboardComponent },
  { path: 'details/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
