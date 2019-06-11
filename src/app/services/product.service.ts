import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.BASE_URL}/product/getAll`);
  }

  getProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.BASE_URL}/product/get/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.BASE_URL}/product/create`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.BASE_URL}/product/delete?productID=${id}`);
  }

  updateProduct(id, product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.BASE_URL}/product/update?productID=${id}`, product);
  }
}
