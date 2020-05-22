import React from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ClosedApplication = ({ classes }) => (
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
                  The application isn't open yet, but we'll email you when it is.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </Grid>
)

export default ClosedApplication
