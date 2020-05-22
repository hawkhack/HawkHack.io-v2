import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import ExpansionPanelSummary from 'components/ExpansionPanelSummary/ExpansionPanelSummary';
import ExpansionPanelDetails from 'components/ExpansionPanelDetails/ExpansionPanelDetails';
import faqStyles from 'assets/jss/faqStyles';
import { FAQs } from 'defaults';

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
              <Grid key={faq.question} item style={{ width: '100%' }} xs={12} md={12} lg={8}>
                <div className={classes.wrapper}>
                  <ExpansionPanel square expanded>
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography color="primary" align="left" variant="h4">{faq.question}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      {typeof (faq.answer) === 'object' ? (
                        <Grid container direction="column">
                          {faq.answer.map((f) => (
                            <Grid key={f} item>
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
