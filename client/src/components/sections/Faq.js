import React from 'react';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import faqStyles from '../../assets/styles/faqStyles';

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
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
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

const ExpansionPanelDetails = withStyles(() => ({
  root: {
    padding: 0,
  },
}))(MuiExpansionPanelDetails);


const Faq = () => {
  const classes = faqStyles();

  return (
    <div className={classes.wrapper}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h1" color="primary">
            Faq
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.wrapper}>
                <ExpansionPanel square expanded>
                  <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography color="primary" align="center" variant="h4">What is a hackathon?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.faqText}>
                                Hackathons are an intense event that bring together software
                                developers, graphic designers and user interface specialists
                                along with industry process experts and professionals to
                                identify issues and create software solutions, usually within
                                a weekend.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.wrapper}>
                <ExpansionPanel square expanded>
                  <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography color="primary" align="center" variant="h4">What is the goal of the hackathon?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.faqText}>
                          We want to create an environment that embraces new ideas and
                                technology solutions. A place where people passionate in
                                technology can come innovate the industry.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.wrapper}>
                <ExpansionPanel square expanded>
                  <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography color="primary" align="center" variant="h4">I'm new, what should I do?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.faqText}>
                        We would love to have you at HawkHack! Throughout the event we
                                will be hosting workshops where you can try new things, start
                                a project for that idea you always had in mind, and receive
                                help from industry experts.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.wrapper}>
                <ExpansionPanel square expanded>
                  <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography color="primary" align="center" variant="h4">How much coding experience do I need?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.faqText}>
                                Absolutely none. Hackathons are a great place to learn and get
                      advice from experienced hackers. We'll also host plenty of
                      workshops and have plenty of mentors so by the end of the 24
                      hours you'll have a working project even if you haven't coded
                      a day in your life before. We also host a prize for best
                      beginner hack
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.wrapper}>
                <ExpansionPanel square expanded>
                  <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography color="primary" align="center" variant="h4">Who can come?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.faqText}>
                                If you're at a current college/university student, a recent
                                graduate (up to 1 year), or a high school student, you're more
                                than welcome to attend! We are open to students of all
                                academic backgrounds and skill levels, so whether you’re an
                                aspiring artist or an expert engineer, there’s a place for you
                                at HawkHack!
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.wrapper}>
                <ExpansionPanel square expanded>
                  <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography color="primary" align="center" variant="h4">Do I need a team?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.faqText}>
                                You are welcome to come solo or in a group no more than 4. We
                                will provide means for you to find a team if you don’t have
                                one
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.wrapper}>
                <ExpansionPanel square expanded>
                  <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography color="primary" align="center" variant="h4">What if I can't stay for full 24 hours?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.faqText}>
                                That is fine! Although we encourage you to do so and make the
                                best of the event, you are free to leave whenever you want and
                                come back later
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.wrapper}>
                <ExpansionPanel square expanded>
                  <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography color="primary" align="center" variant="h4">How much does it cost to attend?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.faqText}>
                                FREE, that’s how much. The event is completely FREE to attend.
                                FREE food, FREE games, FREE fun. Sounds good, doesn’t it?
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Faq;
