import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props) {
  const { isLoggedIn, path, component: Component } = props;
  console.log(isLoggedIn, 'isLogged in');
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
