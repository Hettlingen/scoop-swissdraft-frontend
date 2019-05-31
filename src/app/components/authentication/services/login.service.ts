import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {UserAccount} from '../model/user-account';
import {Observable} from 'rxjs/internal/Observable';


@Injectable()
export class LoginService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public login(body: Object): Observable<UserAccount> {
    const options = {
      headers: this.headers
    };

    return this.http.post<UserAccount>('http://localhost:8081/api/v1/user-account/login', body, options);
  }

  public logout() {
    return this.http.get(`http://localhost:8081/api/v1/user-account/logout`);
  }

  public saveUserProfile(body: Object): Observable<UserAccount> {
    const options = { headers: this.headers };

    // TODO PUT Methode verwenden
    return this.http.post<UserAccount>(`http://localhost:8081/api/v1/user-account/userProfile`, body, options);
  }

  public isLoggedIn(): boolean {
    if (localStorage.getItem('currentUser') != null) {
      return true;
    }
    return false;
  }
}
