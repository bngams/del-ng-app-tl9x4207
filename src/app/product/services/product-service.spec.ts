import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../models/product';

describe('ProductServiceTest', () => {
    // We declare the variables that we'll use for the Test Controller and for our Service
    let httpTestingController: HttpTestingController;
    let pService: ProductService;

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
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        // We inject our service (which imports the HttpClient) and the Test Controller
        httpTestingController = TestBed.get(HttpTestingController);
        pService = TestBed.get(ProductService);
    }));

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should create the service', () => {
        expect(pService).toBeTruthy();
    });

    it('should load products', () => {
        // create a mock of products
        const mockProducts: Product[] = [
            new Product(1, 'P1', 100),
            new Product(2, 'P2', 200),
            new Product(3, 'P3', 300),
        ];

        // check if service works well
        pService.getProductsObservable()
            .subscribe(res => {
                expect(res).toEqual(mockProducts);
            });

        // intercept http call
        const req = httpTestingController.expectOne('http://localhost:3004/products');
        expect(req.request.method).toEqual('GET');
        req.flush(mockProducts);
    });
});
