import React, { useState, useEffect, useCallback } from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';
import navbarStyles from 'assets/jss/navbarStyles';
import RegisterNav from 'components/NavBar/sections/RegisterNav';
import LoginNav from 'components/NavBar/sections/LoginNav';
import UserNav from 'components/NavBar/sections/UserNav';

const NavBar = ({ route }) => {
  const [top, setTop] = useState(true);
  const classes = navbarStyles();

  const handleTop = (tp) => setTop(tp);

  const handleScroll = useCallback(() => {
    if (window.scrollY < 100) {
      handleTop(true);
    } else {
      handleTop(false);
    }
  }, []);

  const routes = (rt) => {
    const log = top ? classes.buttonTop : classes.buttonNotTop;

    switch (rt) {
      case 'register':
        return (
          <RegisterNav
            top={top}
          />
        );
      case 'login':
        return (
          <LoginNav
            top={top}
          />
        );
      case 'user':
        return (
          <UserNav
            top={top}
          />
        );
      default:
        return (
          <>
            <Grid item>
              {!top && (
                <div style={{ padding: 20 }}>
                  <img style={{ width: "50px", height: "auto" }} alt={"our logo"} src="https://msu-images.s3.amazonaws.com/logo-min.png" />
                </div>
              )}
            </Grid>
            <Grid item>
              <Grid container direction="row">
                <Grid item>
                  <div className={classes.wrapper}>
                    <NavLink
                      to={localStorage.getItem('cool-jwt') ? 'dashboard' : 'login'}
                      className={classes.navLink}
                    >
                      <Button color="inherit" className={log}>
                        Login
                      </Button>
                    </NavLink>
                    <NavLink
                      to={localStorage.getItem('cool-jwt') ? 'dashboard' : 'register'}
                      className={classes.navLink}
                    >
                      <Button color="inherit" className={log}>
                      Register
                      </Button>
                    </NavLink>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </>
        );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <AppBar className={top ? classes.onTop : classes.NotTop}>
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {routes(route)}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
