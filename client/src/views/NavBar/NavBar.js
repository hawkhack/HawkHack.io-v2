import React, { useState, useEffect, useCallback } from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
    switch (rt) {
      case 'register':
        return (
          <RegisterNav
            top={top}
            classes={classes}
          />
        );
      case 'login':
        return (
          <LoginNav
            top={top}
            classes={classes}
          />
        );
      case 'user':
        return (
          <UserNav
            top={top}
            classes={classes}
          />
        );
      default:
        return (
          <NavLink
            to="login"
            className={classes.navLink}
          >
            <Button color="inherit" className={top ? classes.buttonTop : classes.buttonNotTop}>
              Login
            </Button>
          </NavLink>
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
