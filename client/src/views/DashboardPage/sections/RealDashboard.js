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

import { defaults, UserStatus } from '../../../defaults';
import { UpdateApplication } from '../../../assets/utils/Api';
import { UserContext } from '../../../context/store'

const RealDashboard = () => {
  const [{ user }, handleUser] = useContext(UserContext);

  const [values, setValues] = useState({
    formErrors: {},
    success: false,
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
      const newUser = {
        ...user,
        profile: result.data
      }

      handleState('success', true)
      handleUser(newUser)
    } catch (err) {
      handleState('formErrors', err);
      throw err;
    }
  };

  const GetStatus = (status) => {
    return UserStatus[status]
  }

  const classes = realDashboardStyles();
  const CheckIn = ({ classes }) => (
    <Grid item xs={12} style={{ margin: '0vw 4vw 1vw 4vw' }}>
      <Paper style={{ height: "100%", width: "100%" }}>
        <div className={classes.wrapper}>
          <ExpansionPanel className={classes.panel} expanded>
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
      </Paper>
    </Grid>
  );

  const checkIn = defaults.openCheckIn ? <CheckIn classes={classes} /> : null;
  return (
    <>
      <Grid
        container
        className={classes.dash}
      >
        <Grid item xs={12} style={{ margin: '4vw 4vw 1vw 4vw' }}>
          <Paper style={{ height: "100%", width: "100%" }}>
            <div className={classes.wrapper}>
              <ExpansionPanel className={classes.panel} expanded>
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant="h4" className={classes.appStatus}>
                    Status:
                    <span className={classes.status}>
                      {' '}
                      {user.profile.status ? user.profile.status : ""}
                      {' '}
                    </span>
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className={classes.wrapper}>
                    <Typography variant="body1">
                      {user.profile.status && user.profile.status !== "Email not verified" ? 
                        GetStatus(user.profile.status) 
                      : "The application will open once your email is verified"}
                    </Typography>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </Paper>
        </Grid>
        {checkIn}
        <Grid item xs={12} style={{ margin: '1vw 4vw 4vw 4vw' }}>
          <Paper style={{ height: "100%", width: "100%" }}>
            <div style={{ padding: 10 }}>
              <ExpansionPanel className={classes.panel} expanded>
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography className={classes.status}>Application</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {user.email ? (
                    <ApplicationUpdateForm
                      user={user}
                      status={user.profile.status && user.profile.status === "Email not verified"}
                      handleUser={handleUser}
                      submitApplication={submitApplication}
                      formErrors={values.formErrors}
                    />
                  ) : <Loading />}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </Paper>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={values.success}
          onClose={handleClose}
          autoHideDuration={1500}
          style={{ marginTop: 100 }}
          message={"Updated!"}
        />
      </Grid>
    </>
  );
};

export default RealDashboard;
