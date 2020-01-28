import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ScrollDownIndicator } from 'react-landing-page';
import { NavLink } from 'react-router-dom';

import heroStyles from '../../assets/styles/heroStyles';

const Hero = () => {
  const classes = heroStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography
            variant="h1"
            className={classes.heroText}
            color="secondary"
            align="center"
          >
            HawkHack
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.wrapper}>
            <Typography
              variant="h5"
              color="secondary"
              align="center"
              className={classes.round2}
            >
              Montclair State University' Second Annual 24-hour hackathon
            </Typography>
            <Typography
              variant="h5"
              color="secondary"
              align="center"
              className={classes.dates}
            >
              Saturday, March 28th - Sunday, March 29th 2020  
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <div className={classes.wrapper}>
                <NavLink
                  to="register"
                  className={classes.navLink}
                >
                  <Button variant="contained" color="primary" className={classes.Button}>
                    Register
                  </Button>
                </NavLink>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ScrollDownIndicator />
    </>
  );
};

export default Hero;
