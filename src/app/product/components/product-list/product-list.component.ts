import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

/**
 * Syntaxe JS DOC
 * ...
 */
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

  // create attribute => <portee> <nom>:<type>
  // Angular use constructor for DI
  constructor(private productService: ProductService) { }

  /**
   * Description
   */
  ngOnInit() {
    this.productService.demoObservable();

    this.productService.getProductsPromise()
      .then(res => {
        console.log('mon résultat', res);
        this.products = res;
      });
  }

}
