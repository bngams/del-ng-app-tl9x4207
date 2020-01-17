import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  @ViewChild('mainTitle', { static: false, read: ElementRef })
  mainTitle: ElementRef;

  // conf static: false => lié qd il est complètement chargé
  @ViewChild(ProductListComponent, { static: false })
  productList: ProductListComponent;

  @ViewChild(ProductListComponent, { read: true, static: false })
  productListElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addProduct(product: Product) {
    console.log('product submitted by form', product);
    this.productList.products.push(product);
  }

}
