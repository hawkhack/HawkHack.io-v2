import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ApplicationUpdateForm from './DashboardForms/ApplicationUpdateForm';

const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    borderBottom: '2px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const RealDashboard = ({ classes }) => {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleLogout = () => {
    localStorage.removeItem('cool-jwt');
    window.location.href = '/';
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        align="center"
        className={classes.dash}
      >
        <Grid item>
          <div>
            <ExpansionPanel square expanded onChange={handleChange('panel1')}>
              <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography variant="h5" color="primary">Application Status</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing
                  elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography variant="h5" color="primary">Check in</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing
                  elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography variant="h5" color="primary">Event Info</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing
                  elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography variant="h5" color="primary">Update application</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ApplicationUpdateForm />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.wrapper}>
            <Button onClick={handleLogout} variant="contained" size="large" color="primary">
              Logout
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default RealDashboard;
