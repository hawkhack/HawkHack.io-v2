import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import makeStyles from '@material-ui/styles/makeStyles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import CustomInput from '../../../../components/CustomInput/CustomInput';

const useStyles = makeStyles(() => ({
  textWrapper: {
    padding: '30px 20px 10px 0px',
  },
}));

const ApplicationUpdateForm = () => {
  const [values, setValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '', // Remember to cap at 10 chars before posting
    dateOfBirth: null,
    shirtSize: '',
    gender: '',
    ethnicity: '',
    github: '',
    linkedin: '',
    website: '',
    school: '',
    graduationYear: '',
    levelOfStudy: '',
    major: '',
    dietaryRestrictions: '',
    specialNeeds: '',
    emergencyName: '',
    emergencyNumber: '',
  });

  const normalizeInput = (value, previousValue) => {
    if (!value) return '';

    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 4) return currentValue;

      if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;

      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    }

    return value;
  };

  const handleState = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleDateChange = (date) => {
    setValues({ ...values, dateOfBirth: date });
  };

  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <div style={{ margin: '1vw 0 2vw 0' }}>
          <Grid
            container
            justify="center"
            direction="column"
            align="center"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                align="center"
              >
                <Grid item sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="First Name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="First"
                      inputProps={{
                        type: 'text',
                        onChange: handleState('firstName'),
                      }}
                    />
                  </div>
                </Grid>
                <Grid item sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Last Name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="Last"
                      inputProps={{
                        type: 'text',
                        onChange: handleState('lastName'),
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                align="center"
              >
                <Grid item sm={12}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="Email"
                      inputProps={{
                        type: 'email',
                        onChange: handleState('email'),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              disabled
                            >
                              <Email />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                align="center"
              >
                <Grid item xs={12} sm={12} md={4}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Phone Number"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="PhoneNumber"
                      inputProps={{
                        type: 'tel',
                        value: normalizeInput(values.phoneNumber),
                        onChange: handleState('phoneNumber'),
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <div className={classes.textWrapper}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        format="MM/dd/yyyy"
                        id="dateOfBirth"
                        fullWidth
                        label="Date of Birth"
                        value={values.dateOfBirth}
                        onChange={handleDateChange}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <div className={classes.textWrapper}>
                    <FormControl fullWidth>
                      <InputLabel id="gender">Gender</InputLabel>
                      <Select
                        labelId="gender"
                        id="gender"
                        fullWidth
                        value={values.gender}
                        onChange={handleState('gender')}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                        <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                align="center"
              >
                <Grid item xs={12} sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <FormControl fullWidth>
                      <InputLabel id="shirtSize">Shirt Size</InputLabel>
                      <Select
                        labelId="shirtSize"
                        id="shirtSize"
                        fullWidth
                        value={values.shirtSize}
                        onChange={handleState('shirtSize')}
                      >
                        <MenuItem value="XXS">XXS</MenuItem>
                        <MenuItem value="XS">XS</MenuItem>
                        <MenuItem value="S">S</MenuItem>
                        <MenuItem value="M">M</MenuItem>
                        <MenuItem value="L">L</MenuItem>
                        <MenuItem value="XL">XL</MenuItem>
                        <MenuItem value="XXL">XXL</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Ethnicity"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="Ethnicity"
                      inputProps={{
                        onChange: handleState('ethnicity'),
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                align="center"
              >
                <Grid item sm={12}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Github"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="github"
                      inputProps={{
                        type: 'text',
                        onChange: handleState('github'),
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                align="center"
              >
                <Grid item sm={12}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Linkedin"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="linkedin"
                      inputProps={{
                        type: 'text',
                        onChange: handleState('linkedin'),
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                align="center"
              >
                <Grid item sm={12}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Website"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="website"
                      inputProps={{
                        type: 'text',
                        onChange: handleState('website'),
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                align="center"
              >
                <Grid item sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="First Name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="First"
                      inputProps={{
                        type: 'text',
                        onChange: handleState('firstName'),
                      }}
                    />
                  </div>
                </Grid>
                <Grid item sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="Email"
                      inputProps={{
                        type: 'email',
                        onChange: handleState('email'),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              disabled
                            >
                              <Email />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                align="center"
              >
                <Grid item sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="First Name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="First"
                      inputProps={{
                        type: 'text',
                        onChange: handleState('firstName'),
                      }}
                    />
                  </div>
                </Grid>
                <Grid item sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="Email"
                      inputProps={{
                        type: 'email',
                        onChange: handleState('email'),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              disabled
                            >
                              <Email />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className={classes.textWrapper}>
                <Button variant="contained" color="primary" style={{ height: '100%', width: '100%' }}>
                  Update
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default ApplicationUpdateForm;
