import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import sponsorStyles from '../../assets/styles/sponsorStyles';

const Sponsors = ({ ...props }) => {
  const { classes } = props;

  return (
    <div className={classes.wholeWrapper}>
      <div className={classes.title}>
        <Typography variant="h3" style={{ fontWeight: '300' }} color="primary" align="center">
              Our Sponsors
        </Typography>
      </div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={3}>
              <div className={classes.imgWrapper}>
                <img className={classes.img} src="https://msu-images.s3.amazonaws.com/Logitech_logo.png" alt="logitech" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <div className={classes.imgWrapper}>
                <img className={classes.img} src="https://msu-images.s3.amazonaws.com/lyft-logo.png" alt="lyft" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <div className={classes.imgWrapper}>
                <img className={classes.img} src="https://msu-images.s3.amazonaws.com/gfuel.png" alt="g" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <div className={classes.imgWrapper}>
                <img className={classes.img} src="https://msu-images.s3.amazonaws.com/monsterlogo.png" alt="monster" />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <div className={classes.imgWrapper}>
            <img className={classes.img} src="https://msu-images.s3.amazonaws.com/google.png" alt="google" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(sponsorStyles)(Sponsors);
