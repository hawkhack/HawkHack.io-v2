import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Email from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

import NavBar from '../NavBar/NavBar';

import loginStyles from '../../assets/styles/loginStyles';
import { LoginUser, ForgotPassword } from '../../assets/utils/api';
import { validateLogin, isEmail } from '../../assets/utils/validation';

const Login = ({ ...props }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    errors: {},
    loading: false,
    open: false,
    forgotPasswordEmail: '',
    snackBarOpen: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleErrors = (errors) => {
    setValues({ ...values, errors });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLoading = (val) => {
    setValues({ ...values, loading: val });
  };

  const handleDialogShow = () => {
    setValues({ ...values, open: !values.open });
  };

  const handleSnackbarShow = () => {
    setValues({ ...values, open: false, snackBarOpen: !values.snackBarOpen });
  };

  const classes = loginStyles();

  const submit = async () => {
    try {
      handleLoading(true);

      const errors = validateLogin(values.email, values.password);
      if (Object.keys(errors).length !== 0) {
        throw errors;
      }

      const user = await LoginUser(values.email, values.password);

      if (!user.data.success) {
        throw user;
      }

      localStorage.setItem('cool-jwt', user.data.token);
      handleLoading(false);
      props.history.push('/dashboard');
    } catch (err) {
      handleErrors(err);
    }
  };

  const submitForgotPassword = async () => {
    try {
      const errors = isEmail(values.forgotPasswordEmail);
      if (Object.keys(errors).length !== 0) {
        throw errors;
      }

      handleDialogShow();
      await ForgotPassword(values.forgotPasswordEmail);

      handleSnackbarShow();
    } catch (err) {
      handleDialogShow();
      handleErrors(err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('cool-jwt') !== null) {
      props.history.push('/dashboard');
    }
    // eslint-disable-next-line
  }, [props.history]);

  return (
    <>
      <CssBaseline />
      <NavBar
        route="register"
      />

      { values.loading
        && (
        <Grid
          container
          direction="column"
          justify="center"
          align="center"
          className={classes.loadingGrid}
        >
          <Grid item>
            <CircularProgress className={classes.progress} />
          </Grid>
        </Grid>
        )}
      <div className={classes.login}>
        <div className={classes.container}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={8} md={4} lg={4} className={classes.gridItem}>
              <div className={classes.card}>
                <form className={classes.form}>
                  <div className={classes.cardHeader}>
                    <Typography
                      variant="h4"
                      align="center"
                      color="secondary"
                      className={classes.loginText}
                    >
                      Login
                    </Typography>
                  </div>
                  <div className={classes.cardBody}>
                    <>
                      <div className={classes.textfieldWrapper}>
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                          <Input
                            id="standard-adornment-password"
                            type="Email"
                            disabled={values.loading}
                            value={values.email}
                            error={!!values.errors.email}
                            onChange={handleChange('email')}
                            endAdornment={(
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  disabled
                                >
                                  <Email />
                                </IconButton>
                              </InputAdornment>
                            )}
                          />
                          {values.errors.email
                            ? <FormHelperText error>{values.errors.email}</FormHelperText>
                            : null}
                        </FormControl>
                      </div>
                      <div className={classes.textfieldWrapper}>
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                          <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            disabled={values.loading}
                            error={!!values.errors.password}
                            onChange={handleChange('password')}
                            endAdornment={(
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  tabIndex={-1}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            )}
                          />
                          {values.errors.password
                            ? <FormHelperText error>{values.errors.password}</FormHelperText>
                            : null}
                        </FormControl>
                      </div>
                    </>

                  </div>
                  <div className={classes.cardFooter}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      disabled={values.loading}
                      onClick={submit}
                      type="submit"
                    >
                          Submit
                    </Button>
                  </div>
                  <div className={classes.cardFooter}>
                    <Button color="primary" className={classes.button} onClick={handleDialogShow}>
                      Forgot Password?
                    </Button>
                    <Dialog
                      open={values.open}
                      onClose={handleDialogShow}
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">Forgot Password?</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          To retrive your password, please enter your email
                          address here. We will send
                          you an email with a link to update your password.
                        </DialogContentText>
                        <TextField
                          autoFocus
                          value={values.forgotPasswordEmail}
                          onChange={handleChange('forgotPasswordEmail')}
                          margin="dense"
                          id="name"
                          error={!!values.errors.forgotEmail}
                          label="Email Address"
                          type="email"
                          fullWidth
                        />
                        {values.errors.forgotEmail
                          ? <FormHelperText error>{values.errors.forgotEmail}</FormHelperText>
                          : null}
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleDialogShow} color="primary">
                          Cancel
                        </Button>
                        <Button onClick={submitForgotPassword} color="primary">
                          Send
                        </Button>
                      </DialogActions>
                    </Dialog>
                    <Snackbar
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      open={values.snackBarOpen}
                      autoHideDuration={6000}
                      onClose={handleSnackbarShow}
                      message="An email has been sent to you with a link to reset your password!"
                      action={(
                        <>
                          <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarShow}>
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        </>
                      )}
                    />
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Login;
