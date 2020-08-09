import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getLoggedInUser(): User {
    return JSON.parse(sessionStorage.getItem('user'));
  }
}
