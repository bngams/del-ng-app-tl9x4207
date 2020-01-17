import { Injectable } from '@angular/core';
import { HttpClient, XhrFactory } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { of, Observable } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // test unique
  private testSingleton = Math.random();

  // DI
  // /!\ use HttpClientModule
  constructor(private http: HttpClient) { }

  postProduct(product: Product) {
    return this.http.post<Product>(environment.apiBaseUrl + '/products', product);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(environment.apiBaseUrl + '/products/' + id);
  }

  getProductsObservable(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiBaseUrl + '/products');
  }

  getProductsPromise(): Promise<Product[]> {
    return this.http.get<Product[]>(environment.apiBaseUrl + '/products').toPromise();
  }

  demoObservable() {
    // create a simple observable
    // define a stream, that emits 3 values
    // 1 - 2 - 3
    // Observable.of()
    const myObservable = of(1, 2, 3);

    const myCompleteObservable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      //  async
      setTimeout(() => {
        subscriber.next(4);
      }, 1000);
    });

    // create an observer
    const myObserver = {
      // like Promise.then() - receive a result
      next: x => console.log('Observer got a next value', x),
      // like Promise.catch() - receive an errror
      error: e => console.log('Observer got an error', e),
      // receive end of stream notification
      complete: () => console.log('Observer got a complete notificaiton')
    };

    const myImcompleteObserver = {
      next: x => console.log('resultat...', x)
    };

    myObservable.subscribe(myObserver);

    // multiple observers
    myObservable.subscribe(myImcompleteObserver);

    //  with incomplte observer
    // myObservable.subscribe(myImcompleteObserver);

    // define observer object on the fly
    // myObservable.subscribe({
    //   next: x => console.log(x),
    //   error: e => console.log(e)
    // });

    // on the fly with a simple syntax, partialObserver
    // myObservable.subscribe(
    //   x => console.log('res', x)
    // );


    // stream 1 , 2 , 3
    myObservable
      .pipe(
        map(x => x * 2),
        filter(x => x > 3),
        reduce((total, x) => total + x, 0)
      )
      .subscribe(
        x => console.log('result from pipe', x)
      );
  }
}
