import React, { useEffect, useContext, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Landing from './views/LandingPage/Landing';
import Login from './views/LoginPage/Login';
import Register from './views/RegisterPage/Register';
import Loading from './components/Loading/Loading';
import theme from './theme';
import { GetUser } from './assets/utils/Api'
import { UserContext } from './context/store'

const Dashboard = React.lazy(() => import('./views/DashboardPage/Dashboard'));
const ResetPassword = React.lazy(() => import('./views/ResetPasswordPage/ResetPassword'));
const NotFound = React.lazy(() => import('./views/NotFoundPage/NotFound'));
const Verified = React.lazy(() => import('./views/VerifiedPage/Verified'));

const App = () => {
  const handleUser = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem('cool-jwt')) {
      const getUser = async () => {
        try {
          let user = await GetUser()
          handleUser[1](user.data)
        } catch (err) {
          localStorage.removeItem('cool-jwt')
        }
      }

      getUser();
    }

    // eslint-disable-next-line
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/verify/:token" component={Verified} />
            <Route exact path="/reset/:token" component={ResetPassword} />
            <Route component={NotFound} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export default App;
