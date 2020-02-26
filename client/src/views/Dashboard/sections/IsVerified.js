import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import { ResendVerifyEmail } from "../../../assets/utils/api";

const IsVerified = ({ classes, ...props }) => {
  const [values, setValues] = useState({
    snackBarOpen: false,
    snackBarMessage: "Email Sent!"
  });

  const handleErrors = () => {
    setValues({ ...values, snackBarMessage: "Something went wrong" });
  };

  const handleSnackbarShow = () => {
    setValues({ ...values, snackBarOpen: !values.snackBarOpen });
  };

  const ResendEmail = async () => {
    try {
      await ResendVerifyEmail();

      handleSnackbarShow();
    } catch (err) {
      handleErrors();
    }
  };

  const Logout = () => {
    localStorage.removeItem("cool-jwt");
    props.history.push("/");
  };

  return (
    <>
      <Grid container direction="column" justify="center" align="center" style={{ minHeight: "90vh" }}>
        <Grid item xs={12}>
          <div className={classes.verifyWrapper}>
            <Typography variant="h3" className={classes.verify} color="primary">
              Great! You're registered
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.verifyWrapper}>
            <Typography variant="h5" className={classes.verifyPara} color="primary">
              Your application to register will appear here once it's released. If you have any questions or concerns,
              contact support@hawkhack.io
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.verifyWrapper}>
            <Typography variant="h5" className={classes.verify} color="primary">
              Make sure to verify your email
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" justify="center" align="center">
            <Grid item>
              <div className={classes.buttonWrapper}>
                <Button color="primary" variant="contained" size="large" onClick={ResendEmail}>
                  Resend Email
                </Button>
              </div>
            </Grid>
            <Grid item>
              <div className={classes.buttonWrapper}>
                <Button color="primary" size="large" onClick={Logout}>
                  Logout
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={values.snackBarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarShow}
        message={values.snackBarMessage}
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarShow}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
  );
};

export default IsVerified;
