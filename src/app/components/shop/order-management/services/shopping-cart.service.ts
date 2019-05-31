
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ShoppingCart } from "../model/shopping-cart";
import { HttpHeaders, HttpClient } from "@angular/common/http";



@Injectable()
export class ShoppingCartService {

  private headers: HttpHeaders;

  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getShoppingCart(): ShoppingCart {
    let shoppingCart= new ShoppingCart();

    this.readShoppingCart()
      .subscribe(
        (data:ShoppingCart) => shoppingCart = data,
        error => console.log(error),
        () => console.log('Shopping Cart successful'));

    return shoppingCart;
  }

  private readShoppingCart(): Observable<ShoppingCart> {
    return this._http.get<ShoppingCart>('http://localhost:8081/api/v1/shopping-cart');
  }
}
