/* eslint-disable import/first */
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Landing from './views/LandingPage/Landing';
import Loading from './components/Loading/Loading';

const Login = React.lazy(() => import('./views/LoginPage/Login'));
const Register = React.lazy(() => import('./views/RegisterPage/Register'));
const Dashboard = React.lazy(() => import('./views/DashboardPage/Dashboard'));
const ResetPassword = React.lazy(() => import('./views/ResetPasswordPage/ResetPassword'));
const NotFound = React.lazy(() => import('./views/NotFoundPage/NotFound'));
const Verified = React.lazy(() => import('./views/VerifiedPage/Verified'));

import PrivateRoute from './assets/utils/PrivateRoute';
import theme from './theme';

const App = () => (
  <Suspense fallback={Loading}>
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
  </Suspense>
);

export default App;
