import React, { Component, Fragment } from "react";

import { Grid, Paper, withStyles, Typography } from "@material-ui/core";

import registerStyles from "../styles/registerStyles";
import RegisterForm from "../forms/RegisterForm";

class Register extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.image}>
          <div className={classes.grad}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ height: "100vh" }}
            >
              <Grid item xs sm={12} md={6}>
                <Typography variant="h1" align="left" color="secondary">
                  Register
                </Typography>
                <Paper className={classes.paper}>
                  <div className={classes.outer}>
                    <RegisterForm />
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(registerStyles)(Register);
