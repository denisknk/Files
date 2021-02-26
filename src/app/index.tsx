import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PrivateRoute } from './PrivateRoute';
import { LoginPage } from './containers/LoginPage/Loadable';
import { FilesPage } from './containers/FilesPage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';

export const history = createBrowserHistory();

export const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={FilesPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};
