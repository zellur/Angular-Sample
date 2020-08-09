import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiEndpointsEnum} from '../../models/constants/ApiEndpoints.enum';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(ApiEndpointsEnum.USERS_ENDPOINT);
  }
}
