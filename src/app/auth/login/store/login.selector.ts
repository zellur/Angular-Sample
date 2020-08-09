import {LoginState} from './login.reducers';
import {createSelector} from '@ngrx/store';

export class RootState {
  login: LoginState;
}

export const selectLoginFeature = (state: RootState) => state.login;

export const selectLogin = createSelector(
  selectLoginFeature,
  (state) => {
    return state.login;
  }
);
