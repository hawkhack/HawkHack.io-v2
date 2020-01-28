import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';
import dashboardStyles from '../../assets/styles/dashboardStyles';
import image from '../../assets/styles/pictures/msubackground-1.png';

import NavBar from '../../components/sections/NavBar';
import Footer from '../../components/sections/Footer';
import Parallax from '../../components/sections/Parallax/Parallax';

const Dashboard = () => {
  const classes = dashboardStyles();

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Parallax filter image={image}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{ height: '100%' }}
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
          <Grid
            container
            direction="column"
            justify="center"
            align="center"
            style={{ height: '100vh' }}
          >
            <Grid item>
                            something one
            </Grid>
            <Grid item>
                            something one
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
