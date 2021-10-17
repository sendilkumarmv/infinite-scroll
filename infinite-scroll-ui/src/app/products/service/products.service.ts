import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly baseUrl = 'http://localhost:5001/api'

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    const productsEndPoint = `${this.baseUrl}/products/getproducts`;
    let products: Product[];
    return this.httpClient.get<Product[]>(productsEndPoint);
  }
}