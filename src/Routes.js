import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import App from './pages/App';
import Login from './pages/Login';
import Register from './pages/Register';
import Cars from './pages/Cars';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/cars" component={Cars} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route
        exact
        path="/logout"
        render={() => {
          localStorage.setItem('CarRentalsToken', undefined);
          // return <Redirect to="/login" />;
          window.location.href = '/login';
        }}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
