import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';

const RegisterNav = ({ classes, top }) => (
  <>
    <Grid item>
      <div>
        <Typography
          color="secondary"
          className={top ? classes.navBarText : classes.navbarScrolled}
          variant="h5"
        >
          HawkHack
        </Typography>
      </div>
    </Grid>
    <Grid item>
      <div className={classes.wrapper}>
        <NavLink
          to="register"
          className={classes.navLink}
        >
          <Button color="inherit" className={top ? classes.buttonTop : classes.buttonNotTop}>
            Register
          </Button>
        </NavLink>
      </div>
    </Grid>
  </>
);

export default RegisterNav;
