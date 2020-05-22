import React, { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import classnames from 'classnames'

import { defaults, UserStatus } from 'defaults';
import Loading from 'components/Loading/Loading';
import applicationStyles from 'assets/jss/applicationStyles'
import { UserContext } from 'context/store'
import ApplicationUpdateForm from 'views/DashboardPage/sections/DashboardForms/ApplicationUpdateForm'
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import ExpansionPanelSummary from 'components/ExpansionPanelSummary/ExpansionPanelSummary';
import ExpansionPanelDetails from 'components/ExpansionPanelDetails/ExpansionPanelDetails';
import { ResendVerifyEmail } from 'assets/utils/Api';

const Application = () => {
  // eslint-disable-next-line
	const [{ user }, handleUser] = useContext(UserContext);
	const [loading, setLoading] = React.useState(false);
	const [sentVerify, setSentVerify] = React.useState(false);
	const [errors, setErrors] = React.useState({});

	const GetStatus = (status) => {
		if (status === 'Email not verified') {
			return 'Check your inbox (or spam) for a verification email. The application will open once your email is verified'
		}

	  return UserStatus[status]
	}

	const handleButtonClick = async () => {
	  try {
	  	setLoading(true);
	  	setSentVerify(false);

	    await ResendVerifyEmail();

	    setLoading(false);
	    setSentVerify(true);
	  } catch (err) {
	    handleError(err)
	  }
	};

	const handleError = (err) => setErrors({ error: err })

	const classes = applicationStyles();

	const buttonClassname = classnames({
	   [classes.buttonSuccess]: sentVerify,
	 });

	const CheckIn = () => (
	  <Grid item xs={12}>
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
	  </Grid>
	);

	const GetWelcome = () => {
		if (user.profile.firstName && user.profile.lastName) {
			return `Welcome back,
			  ${user.profile.firstName.charAt(0).toUpperCase() + user.profile.firstName.substring(1)}`
		}

		return 'Welcome'
	}

	if (!user.profile.status) {
		return (<Loading />)
	}

	return (
    <>
    	{defaults.openCheckIn && <CheckIn />}
      <Grid item xs={12}>
        <div className={classes.wrapper}>
          <Typography color="primary" align="center" className={classes.status}>
            {GetWelcome()}
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
                        {user.profile.status}
                        {' '}
                      </span>
                    </Typography>
                  </div>
                  {user.profile.status === "Email not verified" &&
                    <div style={{ padding: 5 }}>
                      <Typography align="center">
                        <Button
                          variant="contained"
                          color="primary"
                          className={buttonClassname}
                          disabled={loading}
                          onClick={handleButtonClick}
                        >
                          {sentVerify ? "Sent!" : "Resend Email"}
                          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                        </Button>
                      </Typography>
                    </div>
                  }
                  {errors &&
                    <Typography color="primary" align="center" variant="body1">
                      {errors.errors}
                    </Typography>
                  }
                  <div className={classes.wrapper}>
                    <Typography align="center" style={{ fontWeight: 300 }} variant="body1">
                      {GetStatus(user.profile.status)}
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
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
                    Application
                  </Typography>
                </div>
                <div className={classes.cardBody}>
                  <ApplicationUpdateForm
                    user={user}
                    status={user.profile.status && user.profile.status === "Email not verified"}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
	)
}

export default Application;
