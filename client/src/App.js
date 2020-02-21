import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Landing from './views/LandingPage/Landing';
import Login from './views/LoginPage/Login';
import Register from './views/RegisterPage/Register';
import Dashboard from './views/DashboardPage/Dashboard';
import ResetPassword from './views/ResetPasswordPage/ResetPassword';
import NotFound from './views/NotFoundPage/NotFound';
import Verified from './views/VerifiedPage/Verified';

import PrivateRoute from './assets/utils/PrivateRoute';
import theme from './theme';

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/verify/:token" component={Verified} />
        <Route exact path="/reset/:token" component={ResetPassword} />
        <Route component={NotFound} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>

);

export default App;
