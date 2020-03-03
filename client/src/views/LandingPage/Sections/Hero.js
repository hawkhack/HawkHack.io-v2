import React, { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';
import { defaults } from '../../../defaults';
import { UserContext } from '../../../context/store';

import heroStyles from '../../../assets/jss/heroStyles';

const Hero = () => {
  // eslint-disable-next-line
  const [{ user }, handleUser] = useContext(UserContext)
  const classes = heroStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={7} sm={5} md={4} lg={3}>
          <img style={{ maxWidth: '100%' }} src="https://msu-images.s3.amazonaws.com/logo-min.png" alt="our logo" />
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
                  to={user.loggedIn && localStorage.getItem('cool-jwt') ? 'dashboard' : 'register'}
                  className={classes.navLink}
                >
                  <Button variant="contained" color="primary" size="large" className={classes.Button}>
                    {user.loggedIn && localStorage.getItem('cool-jwt') ? 'Dashboard' : 'Register'}
                  </Button>
                </NavLink>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
