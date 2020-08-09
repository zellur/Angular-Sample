import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginResolverService} from './login/login-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    resolve: {
      users: LoginResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
