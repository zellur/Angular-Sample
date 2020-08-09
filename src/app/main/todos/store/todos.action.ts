import {Action} from '@ngrx/store';
import {Todo} from '../../../models/todo.model';

export const GET_TODOS = 'GET_TODOS';
export class GetTodos implements Action {
  readonly type = GET_TODOS;
  constructor(public payload: Todo[]) {}
}
export type TodosAction = GetTodos;
