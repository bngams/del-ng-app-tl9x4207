import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product('P1', 100),
    new Product('P2', 200),
    new Product('P3', 300),
  ];

  constructor() { }

  ngOnInit() {
  }

}
