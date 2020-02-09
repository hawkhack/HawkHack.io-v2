import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MobileDash from './MobileDash';

const RealDashboard = ({ classes }) => {
  const [mobile, setMobile] = useState(false);

  const resize = () => {
    const currentHideNav = (window.innerWidth <= 760);
    if (currentHideNav !== mobile) {
      setMobile(currentHideNav);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, [resize]);

  const dash = mobile ? <MobileDash classes={classes} /> : <Typography color="primary" variant="h1"> not mobile </Typography>;
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        align="center"
        className={classes.dash}
      >
        {dash}
      </Grid>
    </>
  );
};

export default RealDashboard;
