
import {Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Showroom } from '../model/showroom';



@Injectable()
export class ShowroomService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getShoppingCart(): Showroom {
    let showroom = new Showroom();

    this.readShowroom()
      .subscribe(
        (data: Showroom) => showroom = data,
        error => console.log(error),
        () => console.log('Showroom successful'));

    return showroom;
  }

  private readShowroom(): Observable<Showroom> {
    return this.http.get<Showroom>('http://localhost:8081/api/v1/showroom');
  }
}
