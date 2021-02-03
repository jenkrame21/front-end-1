import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={ props => {
      if(localStorage.getItem('token')) { 
        // if token token found, return authorized component
        return <Component {...props} />
      } else {
        // if token not foud, Reroute back to the login screen
        return <Redirect to='/login' />
      }
    }} />
  );
}

export default PrivateRoute;