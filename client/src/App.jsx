import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import LandingPage from './components/Landing/Landing';

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
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>

);

export default App;
