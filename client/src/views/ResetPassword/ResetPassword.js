import React, { useState } from 'react';

import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import resetPasswordStyles from '../../assets/styles/resetPasswordStyles';

const ResetPassword = ({ ...props }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    password2: '',
    errors: {},
    loading: false,
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

  const classes = resetPasswordStyles();

  const resetPassword = async () => {
    // validate
    handleLoading(true);
    await axios.post(`${process.env.REACT_APP_API_URL}/u/resetpw`, {
      email: values.email,
      password: values.password,
      password2: values.password2,
    })
      .then((result) => {
        localStorage.setItem('cool-jwt', result.data.token);
        handleLoading(false);
        props.history.push('/');
      })
      .catch((err) => {
        handleErrors(err.response.data);
      });
  };

  return (
    <>
      <CssBaseline />
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
      <div className={classes.resetPassword}>
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
                      className={classes.passwordResetTypography}
                    >
                      Password Reset
                    </Typography>
                  </div>
                  <div className={classes.cardBody}>
                    <div className={classes.textfieldWrapper}>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type="Email"
                          value={values.email}
                          disabled={values.loading}
                          error={values.errors.email}
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
                        <InputLabel htmlFor="standard-adornment-password">New Password</InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={values.showPassword ? 'text' : 'password'}
                          value={values.password}
                          disabled={values.loading}
                          error={values.errors.password}
                          onChange={handleChange('password')}
                          endAdornment={(
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
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
                    <div className={classes.textfieldWrapper}>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="standard-adornment-password">Confirm New Password</InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={values.showPassword ? 'text' : 'password'}
                          value={values.password2}
                          disabled={values.loading}
                          error={values.errors.password2}
                          onChange={handleChange('password2')}
                          endAdornment={(
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                disabled
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
                              </IconButton>
                            </InputAdornment>
                          )}
                        />
                        {values.errors.password2
                          ? <FormHelperText error>{values.errors.password2}</FormHelperText>
                          : null}
                      </FormControl>
                    </div>
                  </div>
                  <div className={classes.cardFooter}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={resetPassword}
                    >
                      Reset My Password
                    </Button>
                  </div>
                  <div className={classes.cardFooter} />
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
