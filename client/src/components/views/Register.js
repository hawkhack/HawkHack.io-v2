import React, { Component, Fragment } from "react";

import { Grid, Paper, withStyles, Typography } from "@material-ui/core";

import registerStyles from "../styles/registerStyles";
import RegisterForm from "../forms/RegisterForm";

class Register extends Component {

  submit = (email, password, repassword) => {
    fetch(process.env.REACT_APP_API_URL + '/api/u/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        password2: repassword
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  render() {
    const { classes } = this.props;
    console.log(process.env.REACT_APP_API_URL)
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
                <Typography variant="h1" align="left" color="secondary" style={{marginBottom: "-12px", fontFamily: "Dancing Script, cursive", textShadow: "1px 1px #000000"}}>
                  Register
                </Typography>
                <Paper className={classes.paper}>
                  <div className={classes.outer}>
                    <RegisterForm submit={this.submit} />
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
