import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import infoStyles from '../../assets/styles/infoStyles';
import People from '../../assets/styles/pictures/peopleIcon.png';
import Game from '../../assets/styles/pictures/gameIcon.png';
import Money from '../../assets/styles/pictures/moneyIcon.png';

const Info = () => {
  const classes = infoStyles();

  return (
    <>
      <Grid
        container
        justify="center"
        align="center"
        direction="row"
      >
        <Grid item>
          <div className={classes.wrapper}>
            <Box className={classes.title} fontSize="h3.fontSize">
              Last year, we had
            </Box>
          </div>
        </Grid>
      </Grid>
      <div className={classes.wrapper}>
        <Grid
          container
          direction="center"
          justify="center"
          align="center"
        >
          <Grid item xs={12} sm={12} md={4}>
            <div className={classes.imgWrapper}>
              <img src={People} alt="people icon" />
            </div>
            <div className={classes.wrapper}>
              <Box className={classes.imageText} fontSize="h6.fontSize">
                Over 150 participants, 30 volunteers and 10 organizers
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={classes.imgWrapper}>
              <img src={Game} alt="people icon" />
            </div>
            <div className={classes.wrapper}>
              <Box className={classes.imageText} fontSize="h6.fontSize">
               More than 30 activities ranging from spray
               painting hair at 12 am to a Laser tag tournament
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={classes.imgWrapper}>
              <img src={Money} alt="people icon" />
            </div>
            <div className={classes.wrapper}>
              <Box className={classes.imageText} fontSize="h6.fontSize">
                Workshops from Google, Netflix, ADP and over $1,000 prizes
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Info;
