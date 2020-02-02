import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const RealDashboard = ({ classes }) => (
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
        >
            Hang in there!
        </Typography>
      </div>
    </Grid>
    <Grid item>
      <div className={classes.wrapper}>
        <Typography
          variant="body1"
          color="primary"
          align="center"
        >
            Once applications open, we'll notify you.
        </Typography>
      </div>
    </Grid>
  </Grid>
);

export default RealDashboard;
