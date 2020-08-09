import * as LoginActions from './login.action';
import {User} from '../../../models/user.model';

export interface LoginState {
  login: State;
}
export interface State {
  users: [];
}
const initialState: State = {
  users: []
};
export function loginReducers(state = initialState, action: LoginActions.LoginActions): {users: (User | User[])[]} {
  switch (action.type) {
    case LoginActions.ADD_USER:
      return {
        ...state,
        users: [...state.users.reduce((accumulator, value) => accumulator.concat(value), action.payload)]
      };
    default:
      return state;
  }
}
