import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import { Application } from '../model/application';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable()
export class ApplicationService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  // public getApplication(uuid: string): Observable<Application> {
  //   return this.http.get(`http://localhost:8081/api/v1/application/${uuid}`)
  //     .map((response: Response) => <Application>response.json())
  //     .catch(this.handleError);
  // }

  public getListApplication(): Observable<Application[]> {
    return this.http.get<Application[]>('http://localhost:8081/api/v1/applications');
  }
}
