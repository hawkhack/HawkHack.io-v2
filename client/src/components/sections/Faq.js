import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import faqStyles from '../../assets/styles/faqStyles';

import { FAQs } from '../../defaults';

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
          <Typography variant="h2" style={{ fontWeight: '300' }} color="primary">
            FAQ
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {FAQs.map((faq) => (
              <Grid key={faq} item style={{ width: '100%' }} xs={12} md={12} lg={8}>
                <div className={classes.wrapper}>
                  <ExpansionPanel square expanded>
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography color="primary" align="left" variant="h4">{faq.question}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      {typeof (faq.answer) === 'object' ? (
                        <Grid container direction="column">
                          {faq.answer.map((f) => (
                            <Grid item>
                              <Box 
                                fontWeight="fontWeightLight" 
                                m={1}
                                align="left"
                                className={classes.faqText}
                              >
                                {f}
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      ) : (
                        <Box 
                          fontWeight="fontWeightLight" 
                          m={1}
                          align="left"
                          className={classes.faqText}
                        >
                          {faq.answer}
                        </Box>
                      )}
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </Grid>
            ))}
            <Grid item style={{ width: '100%' }} xs={12} md={12} lg={8}>
              <div className={classes.wrapper}>
                <ExpansionPanel square expanded>
                  <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography color="primary" align="left" variant="h4">More questions?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.faqText}>
                      Send your question to
                      {' '}
                      <a href="mailto:team@hawkhack.io"> team@hawkhack.io </a>
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
