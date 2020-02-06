import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { ScrollDownIndicator } from 'react-landing-page';
import { NavLink } from 'react-router-dom';
import defaults from '../../defaults';

import heroStyles from '../../assets/styles/heroStyles';
import Countdown from "react-countdown-now";

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
            {defaults.title}
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
              {defaults.subTitle}
            </Typography>
            <Typography
              variant="h5"
              color="secondary"
              align="center"
              className={classes.dates}
            >
              {defaults.dateText}
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
                  <Button variant="contained" color="primary" size="large" className={classes.Button}>
                    Register
                  </Button>
                </NavLink>
              </div>
            </Grid>
          </Grid>
          <div className={classes.countdown}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid item>
                Countdown <br></br>to Hacking
              </Grid>
              <Grid item>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item>
                  <Typography
                    variant="h5"
                    color="secondary"
                    align="center"
                  >
                    Day:Hr:Mn:Sec
              </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Countdown date={Date.parse(defaults.startDateText)} />
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <ScrollDownIndicator />
    </>
  );
};

export default Hero;
