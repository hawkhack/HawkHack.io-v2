import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import sponsorStyles from '../../../assets/jss/sponsorStyles';

import { sponsorsRowTwo, sponsorRowFour } from '../../../defaults';

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
        <Grid item xs={12} sm={8} md={5}>
          <div className={classes.wrapper}>
            <img className={classes.img} src="https://msu-images.s3.amazonaws.com/cesac.webp" alt="google" />
          </div>
        </Grid>
        <Grid item>
          <div className={classes.wrapper}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
            
              {/* SPONSOR LOGOS */}
              {sponsorsRowTwo.map((url) => (
                <Grid key={url.image_url} item xs={12} sm={8} md={3}>
                  <div className={classes.imgWrapper}>
                    <a href={url.sponsor_url}>
                      <img className={classes.img} src={url.image_url} alt="logitech" />
                    </a>
                  </div>
                </Grid>
              ))}

            </Grid>
          </div>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={8} md={4}>
              <div className={classes.imgWrapper}>
                <img className={classes.img} src="https://msu-images.s3.amazonaws.com/google+(1)-min.png" alt="google" />
              </div>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <div className={classes.imgWrapper}>
                <img className={classes.img} src="https://msu-images.s3.amazonaws.com/atalakit-min.png" alt="google" />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <div className={classes.wrapper}>
            <img className={classes.img} src={sponsorRowFour[0]} alt="google" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(sponsorStyles)(Sponsors);
