import {
  LOGIN_USER_PENDING,
  LOGIN_USER_FULFILLED,
  LOGIN_USER_REJECTED,
} from '../actionTypes/login';
import { ILoginState, LoginActionTypes } from '../actionTypes/login';

export const initialState: ILoginState = {
  loading: false,
  error: null,
};

export const loginReducer = (state = initialState, action: LoginActionTypes): ILoginState => {
  switch(action.type) {
    case LOGIN_USER_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_USER_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
