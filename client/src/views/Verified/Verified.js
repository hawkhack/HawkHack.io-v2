import React, { useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import dashboardStyles from '../../assets/styles/dashboardStyles';
import image from '../../assets/styles/pictures/msubackground-1.png';

import NavBar from '../NavBar/NavBar';
import Footer from '../../components/sections/Footer';
import Parallax from '../../components/sections/Parallax/Parallax';
import { VerifyUser } from '../../assets/utils/api';

const Verified = ({ ...props }) => {
  const removeJWT = () => {
    const token = localStorage.getItem('cool-jwt');
    if (token != null) {
      localStorage.removeItem('cool-jwt');
    }
  };

  const handleError = () => {
    localStorage.removeItem('cool-jwt');
    props.history.push('/NotFound');
  };

  useEffect(() => {
    removeJWT();
    const apiCall = async () => {
      try {
        if (!props.match.params.token) {
          throw new Error('No token');
        }

        const result = await VerifyUser(props.match.params.token);
        if (!result.data.success) {
          throw new Error('Something went wrong');
        }
      } catch (err) {
        // Redirect to 404
        handleError(err);
      }
    };


    apiCall();
  }, []);

  const classes = dashboardStyles();

  return (
    <>
      <CssBaseline />
      <NavBar
        route="user"
      />
      <Parallax filter image={image}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{ height: '100%' }}
        >
          <Grid item>
            <div />
          </Grid>
        </Grid>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Grid
          container
          justify="center"
          align="center"
          direction="column"
          style={{ height: '90vh' }}
        >
          <Grid item>
            <div className={classes.wrapper}>
              <Typography
                variant="h3"
                color="primary"
              >
                You're verified!
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              color="primary"
            >
                If the application is open, login to apply
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="center"
              align="center"
            >
              <Grid item>
                <div className={classes.wrapper}>
                  <NavLink to="/login" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="large" color="primary">
                      Login
                    </Button>
                  </NavLink>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.wrapper}>
                  <NavLink to="/register" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="large" color="primary">
                      Register
                    </Button>
                  </NavLink>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Verified;
