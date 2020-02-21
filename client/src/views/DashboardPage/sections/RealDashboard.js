import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import realDashboardStyles from '../../../assets/jss/realDashboardStyles'
import ExpansionPanel from '../../../components/ExpansionPanel/ExpansionPanel'
import ExpansionPanelSummary from '../../../components/ExpansionPanelSummary/ExpansionPanelSummary'
import ExpansionPanelDetails from '../../../components/ExpansionPanelDetails/ExpansionPanelDetails'
import ApplicationUpdateForm from './DashboardForms/ApplicationUpdateForm'

const RealDashboard = ({ user, ...props }) => {
  const [values, setValues] = useState({
    status: "Not Submitted"
  })

  const handleState = (key, val) => {
    setValues({ ...values, [key]: val });
  };

  useEffect(() => {
    if (user.status) {
      handleState('status', user.status)
    }
  // eslint-disable-next-line
  }, [])

  const classes = realDashboardStyles()

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
            <Paper style={{ margin: "4vw 4vw 1vw 4vw" }}> 
              <Grid item>
                <div className={classes.wrapper}>
                  <ExpansionPanel expanded>
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography variant="h4" className={classes.appStatus}>
                        {"Status: "}<span className={classes.status}> {values.status} </span>
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
            <Paper style={{ margin: "0vw 4vw 1vw 4vw" }}> 
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
            <Paper style={{ margin: "1vw 4vw 1vw 4vw" }}>
              <Grid item>
                <div className={classes.wrapper}>
                  <ExpansionPanel expanded>
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography className={classes.status}>Application</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <ApplicationUpdateForm />
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
