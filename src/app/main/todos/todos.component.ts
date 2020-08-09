import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {Todo} from '../../models/todo.model';
import {select, Store} from '@ngrx/store';
import * as fromTodos from '../todos/store/todos.reducer';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  private todos: Todo[] = [];
  // todos: Observable<{todos: Todo[]}>;
  currentUser: User;
  constructor(private store: Store<fromTodos.TodosState>) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.store.pipe(select('todos')).subscribe(
      (data) => {
        this.todos = data.todos;
      }
    );
  }
  getUserInfo(): void{
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
  }
  getTodos(): Todo[] {
    return this.todos.filter((item) => item.completed === true);
  }

}
