import React from 'react';
import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import scheduleStyles from 'assets/jss/sponsorStyles';
import { dayOne, dayTwo, dayOneSchedule, dayTwoSchedule } from 'defaults';

const Schedule = () => (
  <>
    <div style={{ padding: 20 }}>
      <Typography variant="h3" style={{ fontWeight: '300' }} align="center" color="primary">
          Schedule
      </Typography>
    </div>
    <Grid
      container
      direction="row"
      justify="center"
      align="center"
    >
      <Grid item xs={12} sm={12} md={12} lg={3}>
        <div style={{ padding: 20 }}>
          <Typography color="primary" variant="h4">
            {dayOne}
          </Typography>
          <Grid container>
            <Grid item xs={12}>
              <List>
                {dayOneSchedule.map((event) => (
                  <ListItem style={{ borderBottom: '1px solid rgba(0, 0, 0, .125)' }}>
                    <ListItemText>
                      <Typography variant="body1" color="primary">
                        {`${event[1]} - ${event[0]}`}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={3}>
        <div style={{ padding: 20 }}>
          <Typography color="primary" variant="h4">
            {dayTwo}
          </Typography>
          <Grid container>
            <Grid item xs={12}>
              <List>
                {dayTwoSchedule.map((event) => (
                  <ListItem style={{ borderBottom: '1px solid rgba(0, 0, 0, .125)' }}>
                    <ListItemText>
                      <Typography variant="body1" color="primary">
                        {`${event[1]} - ${event[0]}`}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  </>
);

export default withStyles(scheduleStyles)(Schedule);
