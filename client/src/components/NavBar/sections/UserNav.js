import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import makeStyles from '@material-ui/core/styles/makeStyles';

const styles = makeStyles((theme) => ({
  navBarText: {
    color: theme.palette.primary.main,
  },
  navbarScrolled: {
    color: theme.palette.primary.main,
    fontFamily: 'Dancing script, cursive',
  },
  buttonTop: {
    color: 'white',
  },
  buttonNotTop: {
    color: theme.palette.primary.main,
  },
  navLink: {
    textDecoration: 'none',
  },
}));

const UserNav = ({ top }) => {
  const classes = styles();

  const handleLogout = () => {
    localStorage.removeItem('cool-jwt');
    window.location.href = '/';
  };

  const hh = top ? classes.navBarText : classes.navbarScrolled;
  const log = top ? classes.buttonTop : classes.buttonNotTop;

  return (
    <>
      <Grid item>
        {!top
      && (
        <div>
          <Typography
            color="secondary"
            className={hh}
            variant="h5"
          >
            <div style={{ padding: 5 }}>
              <img style={{ width: "50px", height: "auto" }} alt={"our logo"} src="https://msu-images.s3.amazonaws.com/logo-min.png" />
            </div>
          </Typography>
        </div>
      )}
      </Grid>
      <Grid item>
        <div className={classes.wrapper}>
          <Button
            color="inherit"
            className={log}
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
