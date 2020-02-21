import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import finalStyles from '../../../assets/jss/finalStyles';

const Final = () => {
  const classes = finalStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <div className={classes.wrapper}>
            <Typography
              variant="h2"
              className={classes.heroText}
              color="primary"
              align="center"
            >
              Join the fun
            </Typography>
          </div>
          <div className={classes.wrapper}>
            <Typography
              variant="h5"
              className={classes.heroText}
              color="primary"
              align="center"
            >
              We have amazing prizes, fun tournaments, and workshops and mentors!
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.wrapper}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid item>
                <div className={classes.wrapper}>
                  <NavLink
                    to="/register"
                    className={classes.navLink}
                  >
                    <Button variant="contained" color="primary" className={classes.Button}>
                      Register
                    </Button>
                  </NavLink>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
    </>
  );
};

export default Final;
