import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import LandingPage from './components/views/Landing';
import Login from './components/views/Login'
import Register from './components/views/Register'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E9190F',
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
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/register" render={(props) => <Register {...props} />} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>

);

export default App;
