import { Injectable } from '@angular/core';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {User} from '../../models/user.model';
import {Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import * as LoginActions from './store/login.action';
import {RootState} from './store/login.selector';

@Injectable({
  providedIn: 'root'
})
export class LoginResolverService {

  constructor(private loginService: LoginService, private store: Store<RootState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.loginService.getUserList().pipe(
      tap((response) => {
        this.store.dispatch(new LoginActions.AddUser(response));
      })
    );
  }
}
