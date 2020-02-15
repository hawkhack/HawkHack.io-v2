import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const RealDashboard = ({ classes, ...props }) => {
  const Logout = () => {
    localStorage.removeItem('cool-jwt');
    props.history.push('/');
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        align="center"
        className={classes.dash}
      >
        <Grid item>
          <div className={classes.wrapper}>
            <Typography
              variant="h2"
              color="primary"
              align="center"
              className={classes.realDashboardTitle}
            >
              Hang in there! The applications aren't open yet.
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.wrapper}>
            <Typography
              variant="body1"
              color="primary"
              align="center"
              className={classes.realDashboardText}
            >
              But when they are, we'll notify you.
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <Button onClick={Logout} color="primary" size="large" variant="contained">
            Logout
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default RealDashboard;
