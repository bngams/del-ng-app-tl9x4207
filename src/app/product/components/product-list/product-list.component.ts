import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../product-card/product-card.component';

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
    new Product(1, 'P1', 100),
    new Product(2, 'P2', 200),
    new Product(3, 'P3', 300),
  ];
  products$: Observable<Product[]>;

  @ViewChildren(ProductCardComponent)
  productsQuery: QueryList<ProductCardComponent>;

  // create attribute => <portee> <nom>:<type>
  // Angular use constructor for DI
  constructor(private productService: ProductService) { }

  /**
   * Description
   */
  ngOnInit() {
    this.loadProductsObservable();
  }

  private loadProductsPromise() {
    this.productService.getProductsPromise()
      .then(res => {
        console.log('mon résultat', res);
        this.products = res;
      });
  }

  private loadProductsObservable() {
    this.productService.getProductsObservable()
      .subscribe(res => this.products = res);

    this.products$ = this.productService.getProductsObservable();
  }

}
