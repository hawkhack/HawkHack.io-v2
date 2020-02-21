import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import infoStyles from '../../../assets/jss/infoStyles';
import People from '../../../assets/img/peopleIcon.png';
import Game from '../../../assets/img/gameIcon.png';
import Money from '../../../assets/img/moneyIcon.png';

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
              Check out last year
            </Box>
          </div>
        </Grid>
      </Grid>
      <div className={classes.wrapper}>
        <Grid
          container
          direction="row"
          justify="center"
          align="center"
        >
          <Grid item xs={12} sm={12} md={7} lg={4}>
            <div className={classes.wrapper}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="240"
                  image="https://msu-images.s3.amazonaws.com/group-pic-min.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <div className={classes.imgWrapper}>
                    <img src={People} alt="people icon" />
                  </div>
                  <hr className={classes.hr} />
                  <div className={classes.wrapper}>
                    <Typography variant="h5" color="textSecondary" component="p">
                      Over 10 organizers, 30 volunteers and 150 hackers
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={4}>
            <div className={classes.wrapper}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="240"
                  image="https://msu-images.s3.amazonaws.com/cup-stacking-min.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <div className={classes.imgWrapper}>
                    <img src={Game} alt="people icon" />
                  </div>
                  <hr className={classes.hr} />
                  <div className={classes.wrapper}>
                    <Typography variant="h5" color="textSecondary" component="p">
                      More than 30 activities ranging from cup-stacking to a Laser tag tournament
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={4}>
            <div className={classes.wrapper}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="240"
                  image="https://msu-images.s3.amazonaws.com/people-min.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <div className={classes.imgWrapper}>
                    <img src={Money} alt="people icon" />
                  </div>
                  <hr className={classes.hr} />
                  <div className={classes.wrapper}>
                    <Typography variant="h5" color="textSecondary" component="p">
                      $15,000+ in sponsorships with workshops from Google, Netflix,
                      ADP and over $1,000 in prizes!
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Info;
