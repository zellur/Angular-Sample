import {Action} from '@ngrx/store';

export const LOGOUT = 'LOGOUT';
export class LogOut implements Action {
  readonly type = LOGOUT;
  constructor() {}
}
export type LogOutAction = LogOut;
