import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';

import Parallax from '../../components/Parallax/Parallax';
import Footer from '../../components/Footer/Footer';
import image from '../../assets/img/msubackground-1.png';

const styles = makeStyles(() => ({
  wrapper: {
    padding: 20,
  },
}));

let msg = "Something went wrong, but we've been notified";

const NotFound = ({ message }) => {
  const classes = styles();

  if (message && message.length !== 0) msg = message;

  return (
    <>
      <CssBaseline />
      <Parallax filter image={image}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ height: '100vh', zIndex: '100' }}
        >
          <Grid item>
            <div className={classes.wrapper}>
              <Typography
                variant="h1"
                align="center"
                color="secondary"
              >
                404
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              align="center"
              color="secondary"
            >
              {msg}
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.wrapper}>
              <NavLink to="/" style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large" color="primary">
                  Home
                </Button>
              </NavLink>
            </div>
          </Grid>
        </Grid>
      </Parallax>
      <Footer />
    </>
  );
};

export default NotFound;
