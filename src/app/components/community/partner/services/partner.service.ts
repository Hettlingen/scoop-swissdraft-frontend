
import {throwError as observableThrowError, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {Partner} from "../model/partner";
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {Person} from "../model/person";
import {Institution} from "../model/institution";



@Injectable()
export class PartnerService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getPartner(uuid: string): Observable<Partner> {
    return this.http.get<Partner>('http://localhost:8081/api/v1/partner/' + uuid);
  }

  public getListPartner(): Observable<Partner[]> {
    return this.http.get<Person[]>('http://localhost:8081/api/v1/person/');
  }

  public createPerson(body:Object): Observable<Partner> {
    return this.http.get<Partner>('http://localhost:8081/api/v1/persons/');

    // let bodyString = JSON.stringify(body); // Stringify payload
    // let headers      = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    // let options       = new RequestOptions({ headers: headers }); // Create a request option
    //
    // return this.http.post(this.commentsUrl, body, options) // ...using post request
    //   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public createInstitution(body:Object): Observable<Institution> {
    return this.http.get<Institution>('http://localhost:8081/api/v1/institutions/');

    // let bodyString = JSON.stringify(body); // Stringify payload
    // let headers      = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    // let options       = new RequestOptions({ headers: headers }); // Create a request option
    //
    // return this.http.post(this.commentsUrl, body, options) // ...using post request
    //   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public updatePerson(body:Object): Observable<Person> {
    // let bodyString = JSON.stringify(body); // Stringify payload
    // let headers      = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    // let options       = new RequestOptions({ headers: headers }); // Create a request option
    //
    // return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
    //   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //   .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    return null;
  }

  public updateInstitution(body:Object): Observable<Institution> {
    // let bodyString = JSON.stringify(body); // Stringify payload
    // let headers      = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    // let options       = new RequestOptions({ headers: headers }); // Create a request option
    //
    // return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
    //   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //   .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    return null;
  }

  public deletePartner(uuid:string) {
    // return this.http.delete(`${this.commentsUrl}/${uuid}`)
    //   .map((res:Response) => res.json())
    //   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
