import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { defaults } from "./Defaults"; // Get a handle to the default application settings
import LandingPage from "./components/Landing/Landing";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import "./components/styles/App.css"
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#336699'
    },
    secondary: {
      main: '#61D095'
    } // Indigo is probably a good match with pink
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
