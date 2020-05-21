import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, user, redirect, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} user={user} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: redirect,
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

