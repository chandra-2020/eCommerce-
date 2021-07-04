import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import {Product} from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8092/products';
  constructor(private httpclient: HttpClient) { }

  getProductList(): Observable<Product[]>{

     return this.httpclient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
     );
    }
}
interface  GetResponse{
   _embedded: {
    products: Product[];
  };
}
