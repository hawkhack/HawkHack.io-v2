import React, { useContext, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import classnames from 'classnames'

import realDashboardStyles from '../../../assets/jss/realDashboardStyles';
import ExpansionPanel from '../../../components/ExpansionPanel/ExpansionPanel';
import ExpansionPanelSummary from '../../../components/ExpansionPanelSummary/ExpansionPanelSummary';
import ExpansionPanelDetails from '../../../components/ExpansionPanelDetails/ExpansionPanelDetails';
import Loading from '../../../components/Loading/Loading';
import ApplicationUpdateForm from './DashboardForms/ApplicationUpdateForm';

import { defaults, UserStatus } from '../../../defaults';
import { UpdateApplication, ResendVerifyEmail } from '../../../assets/utils/Api';
import { UserContext } from '../../../context/store'

const RealDashboard = () => {
  const [{ user }, handleUser] = useContext(UserContext);

  const [values, setValues] = useState({
    formErrors: {},
    success: false,
    loading: false,
    sendVerify: false,
    errors: ""
  });

  const handleButtonClick = async () => {
    try {

      setValues({
        ...values,
        sendVerify: false,
        loading: true
      })

      await ResendVerifyEmail();

      setValues({
        ...values,
        sendVerify: true,
        loading: false
      })
    } catch (err) {
      handleError()
    }
  };

  const classes = realDashboardStyles();


  const buttonClassname = classnames({
     [classes.buttonSuccess]: values.sendVerify,
   });

  const handleError = () => {
    setValues({
      ...values,
      errors: "Something went wrong"
    })
  }

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
        justify="center"
        alignItems="center"
        className={classes.dash}
      >
        <Grid item xs={12} style={{  }}>
          <div className={classes.wrapper}>
            <Typography color="primary" align="center" className={classes.status}>
              {user.profile.firstName && user.profile.lastName ? 
                `Welcome back, 
                  ${user.profile.firstName.charAt(0).toUpperCase() + user.profile.firstName.substring(1)}` 
                  : "Welcome"}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
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
                      Status
                    </Typography>
                  </div>
                  <div className={classes.cardBody}>
                    <div className={classes.wrapper}>
                      <Typography align="center" variant="h4" className={classes.appStatus}>
                        <span className={classes.status}>
                          {' '}
                          {user.profile.status ? user.profile.status : ""}
                          {' '}
                        </span>
                      </Typography>
                    </div>
                    {user.profile.status && user.profile.status === "Email not verified" &&
                      <div style={{ padding: 5 }}>
                        <Typography align="center">
                          <Button
                            variant="contained"
                            color="primary"
                            className={buttonClassname}
                            disabled={values.loading}
                            onClick={handleButtonClick}
                          >
                            {values.sendVerify ? "Sent!" : "Resend Email"}
                            {values.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                          </Button>
                        </Typography>
                      </div>
                    }
                    {values.errors &&
                      <Typography color="primary" align="center" variant="body1">
                        {values.errors}
                      </Typography>
                    }
                    <div className={classes.wrapper}>
                      <Typography align="center" style={{ fontWeight: 300 }} variant="body1">
                        {user.profile.status && user.profile.status !== "Email not verified" ? 
                          GetStatus(user.profile.status) 
                        : "The application will open once your email is verified"}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        {checkIn}
        <Grid item xs={12}>
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
                    {user.email ? (
                      <ApplicationUpdateForm
                        user={user}
                        status={user.profile.status && user.profile.status === "Email not verified"}
                        handleUser={handleUser}
                        submitApplication={submitApplication}
                        formErrors={values.formErrors}
                      />
                    ) : <Loading />}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
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
