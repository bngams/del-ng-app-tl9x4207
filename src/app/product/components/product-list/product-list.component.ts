import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

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
  products$: Observable<Product[]>;

  // create attribute => <portee> <nom>:<type>
  // Angular use constructor for DI
  constructor(private productService: ProductService) { }

  /**
   * Description
   */
  ngOnInit() {
    this.loadProductsObservable();
  }

  loadProductsPromise() {
    this.productService.getProductsPromise()
      .then(res => {
        console.log('mon résultat', res);
        this.products = res;
      });
  }

  loadProductsObservable() {
    this.productService.getProductsObservable()
      .subscribe(res => this.products = res);

    this.products$ = this.productService.getProductsObservable();
  }

}
