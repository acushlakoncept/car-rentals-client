import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/App';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
