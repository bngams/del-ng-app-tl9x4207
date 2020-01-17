import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  detailedProduct: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    // let paramId: number;
    // this.route.paramMap.subscribe( params => paramId = parseInt(params.get('id'), 10) );
    const id: number = this.route.snapshot.params.id;
    // simulate loading
    setTimeout(() => {
      this.loadProduct(id);
    }, 3000);
  }

  loadProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      p => this.detailedProduct = p
    );
  }

}
