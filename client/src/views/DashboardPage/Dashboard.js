import React, { useContext, useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import dashboardStyles from '../../assets/jss/dashboardStyles';
import image from '../../assets/img/msubackground-1.png';

import Footer from '../../components/Footer/Footer';
import Parallax from '../../components/Parallax/Parallax';
import NavBar from '../../components/NavBar/NavBar';
import RealDashboard from './sections/RealDashboard';

import { UserContext } from '../../context/store'
import { GetUser } from '../../assets/utils/Api'

const Dashboard = ({ ...props }) => {
  const [{ user }, handleUser] = useContext(UserContext);
  
  const classes = dashboardStyles();

  useEffect(() => {
    if (!user.loggedIn || !localStorage.getItem('cool-jwt')) {
      localStorage.removeItem('cool-jwt')
      props.history.push('/');
    }

    if (!user.email) {
      const getUser = async () => {
        try {
          let user = await GetUser()
          
          handleUser(user.data)
        } catch (err) {
          localStorage.removeItem('cool-jwt')
          props.history.push('/');
        }
      }

      getUser();
    }
    // eslint-disable-next-line
  }, []);

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
          <RealDashboard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
