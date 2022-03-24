import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * @author
 * @function ProtectedRoute
 **/

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem('isLogged') === 'true') {
          return <Component {...props} />;
        } else return <Redirect to="/Login" />;
      }}
    />
  );
};

export default ProtectedRoute;
