import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TodoService} from './todo.service';
import {Todo} from '../../models/todo.model';
import {Store} from '@ngrx/store';
import * as fromTodos from '../todos/store/todos.reducer';
import {tap} from 'rxjs/operators';
import * as TodosAction from '../todos/store/todos.action';

@Injectable({
  providedIn: 'root'
})
export class TodosResolverService {

  constructor(private todoService: TodoService, private store: Store<fromTodos.TodosState>) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> {
    // return this.todoService.getTodos();
    return this.todoService.getTodos().pipe(
      tap((response) => {
        this.store.dispatch(new TodosAction.GetTodos(response));
      })
    );
  }
}
