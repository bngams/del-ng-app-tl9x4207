import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SyntaxComponent } from './components/syntax/syntax.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Routes = Route[]
const routes: Routes = [
  { path: 'syntax', component: SyntaxComponent },
  { path: 'products', loadChildren: './product/product.module#ProductModule' },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
