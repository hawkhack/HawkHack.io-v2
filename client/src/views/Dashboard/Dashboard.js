import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';
import axios from 'axios';
import dashboardStyles from '../../assets/styles/dashboardStyles';
import image from '../../assets/styles/pictures/msubackground-1.png';

import NavBar from '../../components/sections/NavBar';
import Footer from '../../components/sections/Footer';
import Parallax from '../../components/sections/Parallax/Parallax';
import IsVerified from './sections/IsVerified';
import RealDashboard from './sections/RealDashboard';
import Progress from './sections/Progress';

const Dashboard = () => {
  const [values, setValues] = useState({
    user: {},
    dash: null
  })

  const handleState = (key, val) => {
    setValues({ ...values, [key]: val })
  }

  useEffect(() => {
    const apiCall = async () => {
      return await axios.get(`${process.env.REACT_APP_API_URL}/u/`, {
        headers: {'Authorization': `${localStorage.getItem("cool-jwt")}`},
      })
        .then((result) => {
          if (result.status !== 200) {
            throw new Error(result)
          }

          handleState("user", result.data)
          handleState("dash", result.data.isVerified ? 
              <RealDashboard classes={classes} /> : <IsVerified classes={ classes } />)

        })
        .catch(err => console.log(err))
    }

    apiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          {!values.dash ? <Progress classes={classes} /> : values.dash}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
