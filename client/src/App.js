import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { defaults } from "./Defaults"; // Get a handle to the default application settings
import LandingPage from "./components/Landing/Landing";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E9190F'
    },
    secondary: {
      main: '#FBFBFF'
    } 
  }
})

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" render={(props) => <LandingPage {...props} />} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>

    );
  }
};

export default App;
