import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {loginReducers} from './login/store/login.reducers';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('login', loginReducers),
    ReactiveFormsModule
  ],
})
export class AuthModule { }
