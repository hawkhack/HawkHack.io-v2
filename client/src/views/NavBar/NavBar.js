import React, { useState, useEffect, useCallback } from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { NavLink } from 'react-router-dom';
import navbarStyles from '../../assets/styles/navbarStyles';
import RegisterNav from './sections/RegisterNav';
import LoginNav from './sections/LoginNav';
import UserNav from './sections/UserNav';

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
    const hh = top ? classes.navBarText : classes.navbarScrolled;
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
              {!top
            && (
            <div>
              <Typography
                color="secondary"
                className={hh}
                variant="h5"
              >
                HawkHack
              </Typography>
            </div>
            )}
            </Grid>
            <Grid item>
              <Grid container direction="row">
                <Grid item>
                  <div className={classes.wrapper}>
                    <NavLink
                      to="login"
                      className={classes.navLink}
                    >
                      <Button color="inherit" className={log}>
                      Login
                      </Button>
                    </NavLink>
                    <NavLink
                      to="register"
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
