import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import LandingPage from './components/views/Landing';
import Login from './components/views/Login'

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
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>

);

export default App;
