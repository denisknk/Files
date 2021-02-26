import axios from 'axios';
import { Dispatch } from 'redux';
import { sessionService } from 'redux-react-session';
import { API_URL } from './config';
import { history } from '../../app';
import {
  LOGIN_USER_PENDING, LOGIN_USER_FULFILLED, LOGIN_USER_REJECTED,
  ILogin,
} from '../actionTypes/login';

export const loginUser = ({ email, password }: ILogin) => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({ type: LOGIN_USER_PENDING });

    const user = await axios.post(`${API_URL}/users`, {
      email,
      password,
    });

    const resUser = {
      id: user.data.id,
      email: user.data.email,
    }

    dispatch({ type: LOGIN_USER_FULFILLED });

    await sessionService.saveSession({ token: '1a2b3c4d' });
    await sessionService.saveUser(resUser);

    history.push('/');
  } catch (error) {
    dispatch({ type: LOGIN_USER_REJECTED, payload: error });
  }
};

export const logoutUser = () => async (): Promise<void> => {
  try {
    await sessionService.deleteSession();
    await sessionService.deleteUser();

    history.push('/login');
  } catch (error) {
    console.error(error);
  }
};
