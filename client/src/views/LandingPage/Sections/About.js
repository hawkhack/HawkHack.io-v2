import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import aboutStyles from 'assets/jss/aboutStyles';
import { about } from 'defaults'

const About = () => {
  const classes = aboutStyles();

  return (
    <div className={classes.section}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item sm={12} md={12} lg={6}>
          <div className={classes.whatsHawkhack}>
            <Typography
              variant="h3"
              align="center"
              color="primary"
              className={classes.whatsHawkhack}
            >
              {about.whatTitle}
            </Typography>
          </div>
          <Box
            fontWeight="fontWeightLight"
            m={1}
            align="center"
            className={classes.whatText}
          >
            {about.whatText}
          </Box>
          <div className={classes.whatsHawkhack}>
            <Typography
              variant="h3"
              align="center"
              color="primary"
              className={classes.whatsHawkhack}
            >
             {about.whenTitle}
            </Typography>
          </div>
          <Box
            fontWeight="fontWeightLight"
            m={1}
            align="center"
            className={classes.whatText}
          >
            <b>{about.whenDate}</b>
            <br />
            <b>{about.whenLocation}</b>
          </Box>
        </Grid>
        <Grid item sm={12} md={12} lg={6}>
          <div className={classes.wrapper}>
            <img className={classes.img} src="https://msu-images.s3.amazonaws.com/msu-min.jpg" alt="there should be something really cool here" />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item style={{ width: '100%' }}>
          <div className={classes.wrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.4248192418804!2d-74.19984088466741!3d40.862550436328576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fe352883ec55%3A0xeece028744cfc9ae!2sMontclair%20State%20University!5e0!3m2!1sen!2sus!4v1579972815513!5m2!1sen!2sus"
              width="100%"
              height="450"
              frameBorder="0"
              className={classes.iframe}
              title="maps"
              allowFullScreen=""
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
