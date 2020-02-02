import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const UserNav = ({ classes, top }) => {
  const handleLogout = () => {
    localStorage.removeItem('cool-jwt');
    window.location.href = '/';
  };

  return (
    <>
      <Grid item>
        <div>
          <Typography
            color="secondary"
            className={top ? classes.navBarText : classes.navbarScrolled}
            variant="h5"
          >
            HawkHack
          </Typography>
        </div>
      </Grid>
      <Grid item>
        <div className={classes.wrapper}>
          <Button
            color="inherit"
            className={top ? classes.buttonTop : classes.buttonNotTop}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default UserNav;
