import React, { useContext, useState, useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import dashboardStyles from '../../assets/jss/dashboardStyles';
import image from '../../assets/img/msubackground-1.png';

import Footer from '../../components/Footer/Footer';
import Parallax from '../../components/Parallax/Parallax';
import NavBar from '../../components/NavBar/NavBar';
import Application from './sections/Application'

import { UserContext } from '../../context/store'
import { defaults } from '../../defaults'

const Dashboard = ({ ...props }) => {
  // eslint-disable-next-line
  const [{ user }, handleUser] = useContext(UserContext);
  const [dashboard, setDashboard] = useState(2);

  const handleDashboard = () => {
    if (defaults.openApplications) {
      return setDashboard(1);
    }

    return setDashboard(2);
  }

  const classes = dashboardStyles();

  useEffect(() => {
    if (!user.loggedIn || !localStorage.getItem('cool-jwt')) {
      localStorage.removeItem('cool-jwt')
      props.history.push('/');
    }

    handleDashboard();
    // eslint-disable-next-line
  }, []);

  const ClosedApplication = () => (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.dash}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <div className={classes.container}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.gridContainer}
          >
            <Grid item xs={12} className={classes.gridItem}>
              <div className={classes.card}>
                <div className={classes.cardHeader}>
                  <Typography
                    variant="h4"
                    align="center"
                    color="secondary"
                    className={classes.loginText}
                  >
                    Application
                  </Typography>
                </div>
                <div className={classes.cardBody}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="primary"
                    className={classes.loginText}
                  >
                    Great you're verified! The application isn't open yet, but we'll email you when it is.
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  )

  return (
    <>
      <CssBaseline />
      <NavBar route="user" />
      <Parallax filter image={image}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{ height: '90vh' }}
        >
          <Grid item>
            <div>
              <Typography
                variant="h1"
                align="center"
                color="secondary"
                className={classes.dashboardTitle}
              >
                Your Dashboard
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {dashboard === 2 ? <ClosedApplication /> : <Application />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
