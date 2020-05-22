import React, { useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import dashboardStyles from 'assets/jss/dashboardStyles';
import image from 'assets/img/msubackground-1.png';

import Footer from 'components/Footer/Footer';
import Parallax from 'components/Parallax/Parallax';
import { VerifyUser } from 'assets/utils/Api';

const Verified = ({ ...props }) => {
  const removeJWT = () => {
    const token = localStorage.getItem('cool-jwt');
    if (token != null) {
      localStorage.removeItem('cool-jwt');
    }
  };

  const handleError = () => {
    localStorage.removeItem('cool-jwt');
    // props.history.push('/');
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
    // eslint-disable-next-line
  }, []);

  const classes = dashboardStyles();

  return (
    <>
      <CssBaseline />
      <Parallax filter image={image}>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Grid
          container
          justify="center"
          align="center"
          direction="column"
          style={{ height: '80vh' }}
        >
          <Grid item>
            <div className={classes.wrapper}>
              <Typography
                variant="h2"
                color="primary"
                align="center"
                style={{ fontWeight: 300 }}
              >
                You're verified!
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              color="primary"
              align="center"
            >
              Your application is open! Login to apply
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
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Verified;
