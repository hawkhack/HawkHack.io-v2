import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { NavLink } from 'react-router-dom';

const styles = makeStyles((theme) => ({
  navBarText: {
    color: theme.palette.primary.main,
  },
  navbarScrolled: {
    color: theme.palette.primary.main,
    fontFamily: 'Dancing script, cursive',
  },
  buttonTop: {
    color: 'white',
  },
  buttonNotTop: {
    color: theme.palette.primary.main,
  },
  navLink: {
    textDecoration: "none"
  }
}));

const LoginNav = ({ top }) => {
  const classes = styles();

  const hh = top ? classes.navBarText : classes.navbarScrolled;
  const log = top ? classes.buttonTop : classes.buttonNotTop;

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
        <div className={classes.wrapper}>
          <NavLink
            to="login"
            className={classes.navLink}
          >
            <Button color="inherit" className={log}>
              Login
            </Button>
          </NavLink>
        </div>
      </Grid>
    </>
  );
};

export default LoginNav;
