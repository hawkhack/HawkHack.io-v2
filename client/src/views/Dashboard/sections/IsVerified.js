import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ResendVerifyEmail } from '../../../assets/utils/api';

const IsVerified = ({ classes }) => {
  const ResendEmail = async () => {
    try {
      const result = await ResendVerifyEmail();

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      align="center"
      style={{ height: '90vh' }}
    >
      <Grid item>
        <div className={classes.verifyWrapper}>
          <Typography
            variant="h3"
            className={classes.verify}
            color="primary"
          >
            Great! You're registered
          </Typography>
        </div>
      </Grid>
      <Grid item>
        <div className={classes.verifyWrapper}>
          <Typography
            variant="h5"
            className={classes.verifyPara}
            color="primary"
          >
            Your application to register will appear here once it's released.
            If you have any questions or concerns, contact support@hawkhack.com
          </Typography>
        </div>
      </Grid>
      <Grid item>
        <div className={classes.verifyWrapper}>
          <Typography
            variant="h5"
            className={classes.verify}
            color="primary"
          >
            Make sure to verify your email
          </Typography>
        </div>
      </Grid>
      <Grid item>
        <Button color="primary" size="large" variant="contained" onClick={ResendEmail}>
          Resend email
        </Button>
      </Grid>
    </Grid>
  );
};

export default IsVerified;
