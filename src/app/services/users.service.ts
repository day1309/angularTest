import { Injectable } from '@angular/core';
import { UserModel } from './../models/user.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.url_login;
  }
  login(elem: UserModel): Observable<any> {
    const options = {
      headers: new HttpHeaders()
    };
    this.baseUrl = encodeURI(`${this.baseUrl}?data={"username":"${elem.username}","password":"${elem.password}"}`);
    return this.httpClient.get(this.baseUrl, options).pipe(
      map(response => {
         return response;
      })
  );
  }
}
