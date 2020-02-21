import React, { useEffect, useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';

import dashboardStyles from '../../assets/jss/dashboardStyles';
import image from '../../assets/img/msubackground-1.png';
import { GetUser } from '../../assets/utils/Api';

import Footer from '../../components/Footer/Footer';
import Parallax from '../../components/Parallax/Parallax';
import IsVerified from './sections/IsVerified';
import RealDashboard from './sections/RealDashboard';

const Dashboard = ({ ...props }) => {
  const [values, setValues] = useState({
    user: {},
    dash: null
  });

  const handleState = (key, val) => {
    setValues({ ...values, [key]: val });
  };

  const handleError = () => {
    localStorage.removeItem('cool-jwt');
    props.history.push('/NotFound');
  };

  const classes = dashboardStyles();

  useEffect(() => {
    if (localStorage.getItem('cool-jwt')) {
      const apiCall = async () => {
        try {
          const user = await GetUser();

          handleState('user', user.data);
          if (user.data.isVerified) {
            handleState('dash', <RealDashboard {...props} user={user.data} classes={classes} />)
          } else {
            handleState('dash', <IsVerified {...props} user={user.data} classes={classes} />)
          }

        } catch (err) {
          if (err.message !== 'Network Error') {
            handleError();
          }

          props.history.push('/');
        }
      };

      apiCall();
    }
    // eslint-disable-next-line
  }, []);


  return (
    <>
      <CssBaseline />
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
          {values.dash ? values.dash
            : (
              <Grid
                container
                direction="column"
                justify="center"
                align="center"
                className={classes.dash}
              >
                <Grid item>
                  <CircularProgress />
                </Grid>
              </Grid>
            )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
