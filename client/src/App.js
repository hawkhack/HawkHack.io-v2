import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import LandingPage from './components/views/Landing';
import Login from './components/views/Login'
import Register from './components/views/Register'
import Dashboard from './components/views/Dashboard'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E9190F',
      secondary: "black"
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
        <Route component={LandingPage} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>

);

export default App;
