import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {select, Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RootState} from './store/login.selector';
import * as loginState from './store/login.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  users: Observable<{users: User[]}>;
  userList: User[] = [];
  loginForm: FormGroup;
  formSubmited: boolean;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private store: Store<RootState>) { }

  ngOnInit(): void {
    this.initLoginForm();
    this.users = this.store.pipe(select(loginState.selectLogin));
    this.route.data.subscribe(data => {
      this.userList = data.users;
    });
  }

  login(): void {
    this.formSubmited = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.email = this.loginForm.value.email;

    for (const e of this.userList) {
      if (e.email === this.email) {
        sessionStorage.setItem('user', JSON.stringify(e));
        this.toastr.success('Login successful!!');
        this.router.navigate(['main']);
        return;
      }
    }
    this.toastr.error('Invalid email!!!');
    this.formSubmited = false;
  }
  initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]]});
  }
  get formControl(): any{
    return this.loginForm.controls;
  }
}
