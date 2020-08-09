import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as AppAction from '../store/app.action';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentUser: any;
  constructor(private authService: AuthService,
              private store: Store<any>,
              private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getLoggedInUser();
  }

  logout(): void {
    this.store.dispatch(new AppAction.LogOut());
    sessionStorage.removeItem('user');
    this.router.navigate(['']);
  }

  goToUrl(): void{
    window.open('http://' + this.currentUser.website);
  }
}
