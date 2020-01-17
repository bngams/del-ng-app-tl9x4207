import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  // get own instance
  // providers: [ProductService]
})
export class ProductFormComponent implements OnInit {
  // create ouptu event
  @Output()
  submitProduct = new EventEmitter<Product>();

  // FormGroup => contain many fields
  // form serialized to json
  // bind with [formGroup]
  productForm: FormGroup;

  // bind with [formControl]
  // otherField = new FormControl();

  // form serialized to array
  // productForm: FormArray;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', [Validators.required])
    });
  }

  saveProduct() {
    console.log(this.productForm.value);
    const product: Product = this.productForm.value;
    // TODO: reinit form
    this.productForm.reset();
    this.productForm.markAsPristine();
    this.productForm.markAsUntouched();
    this.productService.postProduct(product).subscribe(
      p => {
        console.log('res', p);
        // trigger an event
        this.submitProduct.emit(p);
      }
    );
  }

}
