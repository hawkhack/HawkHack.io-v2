import React from 'react';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline'

import Login from 'views/LoginPage/Login'
import Admin from 'layouts/Admin'

const hist = createBrowserHistory();

const App = () => {

  return (
  	<Router history={hist}>
      <CssBaseline />
	    <Switch>
	      <Route path="/login" component={Login} />
	      <Route path="/admin" component={Admin} />
	    </Switch>
    </Router>
  )
}

export default App;