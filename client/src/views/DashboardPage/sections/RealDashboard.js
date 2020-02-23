import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import realDashboardStyles from '../../../assets/jss/realDashboardStyles';
import ExpansionPanel from '../../../components/ExpansionPanel/ExpansionPanel';
import ExpansionPanelSummary from '../../../components/ExpansionPanelSummary/ExpansionPanelSummary';
import ExpansionPanelDetails from '../../../components/ExpansionPanelDetails/ExpansionPanelDetails';
import ApplicationUpdateForm from './DashboardForms/ApplicationUpdateForm';

import { defaults } from '../../../defaults';
import { UpdateApplication } from '../../../assets/utils/Api';

const CheckIn = ({ classes }) => (
  <Paper style={{ margin: '0vw 4vw 1vw 4vw' }}>
    <Grid item>
      <div className={classes.wrapper}>
        <ExpansionPanel expanded>
          <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="h4" className={classes.status}>
              Check In
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              stuff and things
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </Grid>
  </Paper>
);

const RealDashboard = ({ user }) => {
  const [values, setValues] = useState({
    status: 'Not Submitted',
    profile: user.profile ? user.profile : { status: 'Incomplete' },
    formErrors: {},
  });

  const handleState = (key, val) => {
    setValues({ ...values, [key]: val });
  };

  const submitApplication = async (app) => {
    try {
      const result = await UpdateApplication(app);

      handleState('profile', result.data);
    } catch (err) {
      handleState('formErrors', err);
      throw err;
    }
  };

  useEffect(() => {
    if (user.profile) {
      handleState('profile', user.profile);
    }
  }, []);

  const classes = realDashboardStyles();
  const checkIn = defaults.openCheckIn ? <CheckIn classes={classes} /> : null;

  return (
    <>
      <Grid
        container
        className={classes.dash}
      >
        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            align="center"
          >
            <Paper style={{ margin: '4vw 4vw 1vw 4vw' }}>
              <Grid item>
                <div className={classes.wrapper}>
                  <ExpansionPanel expanded>
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography variant="h4" className={classes.appStatus}>
                        Status:
                        <span className={classes.status}>
                          {' '}
                          {values.profile.status}
                          {' '}
                        </span>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Fill out the application below
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </Grid>
            </Paper>
            {checkIn}
            <Paper style={{ margin: '1vw 4vw 4vw 4vw' }}>
              <Grid item>
                <div className={classes.wrapper}>
                  <ExpansionPanel expanded>
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography className={classes.status}>Application</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <ApplicationUpdateForm
                        user={user}
                        profile={values.profile}
                        submitApplication={submitApplication}
                        formErrors={values.formErrors}
                      />
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default RealDashboard;
