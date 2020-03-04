import React from 'react';

import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import loginStyles from 'assets/jss/loginStyles'

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

import { UserContext } from 'context/store'
import { validateLogin, isEmail } from 'assets/utils/validation';
import { LoginUser, GetUser } from 'assets/utils/api';

const Login = (props) => {
  const classes = loginStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleErrors = (err) => {
    setErrors(err)
  }

  const handleLoading = (val) => {
    setLoading(val)
  }

  const submit = async (e) => {
    e.preventDefault();
    try {
      handleLoading(true)
      const errors = validateLogin(email, password);
      if (Object.keys(errors).length !== 0) {
        throw errors;
      }

      let result = await LoginUser(email, password);
      if (!result.data.success) {
        throw result;
      }

      localStorage.setItem('admin-jwt', result.data.token);

      const profile = await GetUser()
      if (profile.role !== "Administrator" && profile.role !== "Volunteer") {
        throw { access: "Access Denied" }
      }

      handleLoading(false)
      props.history.push('/admin');
    } catch (err) {

      handleLoading(false)
      handleErrors(err);
    }
    
  }

  return (
    <>
      {loading
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
          <GridContainer
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <GridItem xs={12} sm={8} md={6} lg={4}>
              <div className={classes.card}>
                <form className={classes.form}>
                  <div className={classes.cardHeader}>
                    <Typography
                      variant="h4"
                      align="center"
                      color="secondary"
                      className={classes.loginText}
                    >
                      Admin Login
                    </Typography>
                  </div>
                  <div className={classes.cardBody}>
                    {errors.access && 
                      <Typography color="primary" align="center">
                        {errors.access}
                      </Typography>
                    }
                    <div className={classes.textfieldWrapper}>
                      <FormControl className={classes.formControl}>
                        <InputLabel error={!!errors.email} htmlFor="standard-adornment-email">Email</InputLabel>
                        <Input
                          id="standard-adornment-email"
                          type="Email"
                          disabled={loading}
                          onChange={handleEmail}
                          error={!!errors.email}
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
                        {errors.email
                          ? <FormHelperText error>{errors.email}</FormHelperText>
                          : null}
                      </FormControl>
                    </div>
                    <div className={classes.textfieldWrapper}>
                    <FormControl className={classes.formControl}>
                      <InputLabel error={!!errors.password} htmlFor="standard-adornment-password">Password</InputLabel>
                      <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        disabled={loading}
                        error={!!errors.password}
                        onChange={handlePassword}
                        endAdornment={(
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              tabIndex={-1}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )}
                      />
                      {errors.password
                        ? <FormHelperText error>{errors.password}</FormHelperText>
                        : null}
                    </FormControl>
                    </div>
                  </div>
                  <div className={classes.cardFooter}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      type="submit"
                      disabled={loading}
                      onClick={submit}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </>
  )	
}

export default Login