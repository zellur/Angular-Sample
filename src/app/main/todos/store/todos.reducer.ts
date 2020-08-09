import * as TodosAction from './todos.action';
import {Todo} from '../../../models/todo.model';

export interface TodosState {
  todos: State;
}
export interface State {
  todos: [];
}
const initialState: State = {
  todos: []
};
export function todosReducers(state = initialState, action: TodosAction.TodosAction): {todos: (Todo | Todo[])[]} {
  switch (action.type) {
    case TodosAction.GET_TODOS:
      return {
        ...state,
        todos: [...state.todos.reduce((a, v) => a.concat(v), action.payload)]
      };
    default:
      return state;
  }
}
