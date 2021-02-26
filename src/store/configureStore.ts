import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

export type AppState = ReturnType<typeof reducer>;

export const configureAppStore = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}
