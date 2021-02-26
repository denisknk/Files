import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import { loginReducer } from './login';
import { filesReducer } from './files';

export default combineReducers({
  session: sessionReducer,
  login: loginReducer,
  files: filesReducer,
});
