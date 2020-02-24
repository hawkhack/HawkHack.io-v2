import React, { useContext, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';

import realDashboardStyles from '../../../assets/jss/realDashboardStyles';
import ExpansionPanel from '../../../components/ExpansionPanel/ExpansionPanel';
import ExpansionPanelSummary from '../../../components/ExpansionPanelSummary/ExpansionPanelSummary';
import ExpansionPanelDetails from '../../../components/ExpansionPanelDetails/ExpansionPanelDetails';
import Loading from '../../../components/Loading/Loading';
import ApplicationUpdateForm from './DashboardForms/ApplicationUpdateForm';

import { defaults } from '../../../defaults';
import { UpdateApplication } from '../../../assets/utils/Api';
import { UserContext } from '../../../context/store'

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

const RealDashboard = () => {
  const [{ user }, handleUser] = useContext(UserContext);

  const [values, setValues] = useState({
    formErrors: {},
    success: false,
    status: user.profile.status ? user.profile.status : ""
  });

  const handleState = (key, val) => {
    setValues({ ...values, [key]: val });
  };

  const handleClose = () => {
    setValues({ ...values, success: false });
  };

  const submitApplication = async (app) => {
    try {
      const result = await UpdateApplication(app);

      handleState('status', result.data.status)
      handleState('success', true)
    } catch (err) {
      handleState('formErrors', err);
      throw err;
    }
  };

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
                          {values.status}
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
                <div style={{ padding: 10 }}>
                  <ExpansionPanel expanded>
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography className={classes.status}>Application</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      {user.email ? (
                        <ApplicationUpdateForm
                          user={user}
                          handleUser={handleUser}
                          submitApplication={submitApplication}
                          formErrors={values.formErrors}
                        />
                      ) : <Loading />}
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={values.success}
          onClose={handleClose}
          autoHideDuration={1500}
          style={{ marginTop: 100 }}
          message="Updated!"
        />
      </Grid>
    </>
  );
};

export default RealDashboard;
