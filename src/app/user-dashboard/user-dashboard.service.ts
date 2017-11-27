import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from './models/user.interface';

const USER_API = "http://localhost:3000/users";

@Injectable()
export class UserDashboardService {
  constructor(private http: Http) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get(USER_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  updateUser(user: User): Observable<User> {
    return this.http
      .put(`${USER_API}/${user.id}`, user)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  removeUser(user: User): Observable<User> {
    return this.http
      .delete(`${USER_API}/${user.id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
