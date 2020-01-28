import React, { useState, useEffect, useCallback } from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';
import navbarStyles from '../../assets/styles/navbarStyles';

const NavBar = () => {
  const [top, setTop] = useState(true);
  const classes = navbarStyles();

  const handleTop = (st) => setTop(st);

  const handleScroll = useCallback(() => {
    if (window.scrollY < 100) {
      handleTop(true);
    } else {
      handleTop(false);
    }
  }, []);

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
          <Grid item>
            {!top
              && (
              <div>
                <Typography
                  color="secondary"
                  className={top ? classes.navBarText : classes.navbarScrolled}
                  variant="h5"
                >
                  HawkHack
                </Typography>
              </div>
              )}
          </Grid>
          <Grid item>
            <div className={classes.wrapper}>
              <NavLink
                to="login"
                className={classes.navLink}
              >
                <Button color="inherit" className={top ? classes.buttonTop : classes.buttonNotTop}>
                  Login
                </Button>
              </NavLink>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
