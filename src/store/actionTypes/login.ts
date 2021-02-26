export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginState {
  loading: boolean;
  error: null | Error;
}

export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING';
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED';
export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED';

interface LoginAction {
  type: typeof LOGIN_USER_PENDING;
}

interface LoginActionFulfilled {
  type: typeof LOGIN_USER_FULFILLED;
}

interface LoginActionRejected {
  type: typeof LOGIN_USER_REJECTED;
  payload: Error;
}

export type LoginActionTypes = LoginAction | LoginActionFulfilled | LoginActionRejected;
