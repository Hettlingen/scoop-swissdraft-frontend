
import {throwError as observableThrowError, Observable} from 'rxjs';
/**
 * Created by martinbraun on 28.09.16.
 */
import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpHeaders, HttpClient} from "@angular/common/http";



@Injectable()
export class ProductService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getProduct(uuid: string): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8081/api/v1/products/${uuid}`);
  }

  public getListProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8081/api/v1/products/');
  }

  public saveProduct(body: Object): Observable<Product> {
    const options = { headers: this.headers };

    return this.http.post<Product>('http://localhost:8081/api/v1/products', body, options);
  }

  public deleteProduct(uuid:string) {
    return this.http.delete(`http://localhost:8081/api/v1/products/${uuid}`);
  }
}
