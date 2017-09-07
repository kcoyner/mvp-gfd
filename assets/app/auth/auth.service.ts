/*
 * auth.service.ts
 */

import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  signup(user: User) {
      const body = JSON.stringify(user);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post('http://localhost:3333/user', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }
  // This creates an observable that can be subscribed to.
  // We create an observable anytime we use NG's Http service.

  signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3333/user/signin', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  logout() {
    localStorage.clear();
  }
}
