import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductListComponent } from './product-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Observable, of } from 'rxjs';

describe('ProductListComponent', () => {
    // We declare the variables that we'll use for the Test Controller and for our Service
    let serviceSpy;

    beforeEach(async(() => {
        // load component with a fake module
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            providers: [
                ProductService
            ],
            declarations: [
                ProductListComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        // We inject our service (which imports the HttpClient) and the Test Controller
        // Spy
        serviceSpy = jasmine.createSpyObj('ProductService', ['getProductsObservable']);
    }));

    it('should create the component', () => {
        // instantiate component
        const fixture = TestBed.createComponent(ProductListComponent);
        // get instance
        const component = fixture.debugElement.componentInstance;
        // tests
        expect(component).toBeTruthy();
    });

    it('should load products on init', () => {
        // create a mock of products
        const mockProducts: Product[] = [
            new Product(1, 'P1', 100),
            new Product(2, 'P2', 200),
            new Product(3, 'P3', 300),
        ];
        serviceSpy.getProductsObservable.and.returnValue(of(mockProducts));

        // instantiate component
        const fixture = TestBed.createComponent(ProductListComponent);
        // get instance
        const component = fixture.debugElement.componentInstance;
        // tests
        expect(component.products).toEqual(mockProducts);
    });
});
