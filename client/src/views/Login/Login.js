import React, { useState } from 'react';

import axios from 'axios';
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
import Email from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import NavBar from '../../components/sections/NavBar';

import loginStyles from '../../assets/styles/loginStyles';

const Login = ({ ...props }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    errors: {},
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

  const classes = loginStyles();

  const submit = async () => {
    // validate
    await axios.post(`${process.env.REACT_APP_API_URL}/u/login`, {
      email: values.email,
      password: values.password,
    })
      .then((result) => {
        if (result.data.success) {
          localStorage.setItem('cool-jwt', result.data.token);
          props.history.push('/');
        }
      })
      .catch((err) => handleErrors(err.response.data));
  };

  return (
    <>
      <CssBaseline />
      <NavBar />
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
                    <div className={classes.textfieldWrapper}>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type="Email"
                          value={values.email}
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
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={values.showPassword ? 'text' : 'password'}
                          value={values.password}
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
                  </div>
                  <div className={classes.cardFooter}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={submit}
                    >
                          Submit
                    </Button>
                  </div>
                  <div className={classes.cardFooter}>
                    <Button color="primary" className={classes.button}>
                          Forgot Password?
                    </Button>
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
