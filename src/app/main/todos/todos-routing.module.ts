import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './todos.component';
import {TodosResolverService} from './todos-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    resolve: { todos: TodosResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
