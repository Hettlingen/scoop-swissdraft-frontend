import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {UserAccount} from '../model/user-account';

@Injectable()
export class RegistrationService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public registerUser(body: object): Observable<UserAccount> {
    const options = { headers: this.headers };

    return this.http.post<UserAccount>('http://localhost:8081/api/v1/user-account/register', body, options);
  }
}
