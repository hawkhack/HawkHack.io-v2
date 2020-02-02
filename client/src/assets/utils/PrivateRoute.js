import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => ( localStorage.getItem('cool-jwt') ? ( <Component {...props} />)
        : <Redirect strict to={{pathname: "/", state: {from: props.location}}}/>
    )} />
  )

export default PrivateRoute;