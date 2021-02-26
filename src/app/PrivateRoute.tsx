import React from "react";
import { useSelector } from 'react-redux';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { AppState } from '../store/configureStore';

interface Props {
  component: React.FC;
  path: string;
  exact?: boolean;
}

export const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const { authenticated, checked } = useSelector((state: AppState) => state.session);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        checked && (authenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        ))
      }
    />
  );
}
