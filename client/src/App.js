import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import LandingPage from './views/Landing/Landing';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Dashboard from './views/Dashboard/Dashboard';
import ResetPassword from './views/ResetPassword/ResetPassword';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E9190F',
      secondary: 'black',
    },
    secondary: {
      main: '#FBFBFF',
    },
  },
});

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route component={LandingPage} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>

);

export default App;
