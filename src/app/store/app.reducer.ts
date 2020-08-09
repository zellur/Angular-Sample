import * as AppAction from './app.action';
export function clearState(reducer): any {
  return (state, action: AppAction.LogOutAction) => {
    if (action.type === AppAction.LOGOUT) {
      state = undefined;
    }
    return reducer(state, action);
  };
}
