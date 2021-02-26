import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';
import './index.css';
import { App } from './app';
import { configureAppStore } from './store/configureStore';

const store = configureAppStore();
sessionService.initSessionService(store);
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDom.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  MOUNT_NODE,
);
