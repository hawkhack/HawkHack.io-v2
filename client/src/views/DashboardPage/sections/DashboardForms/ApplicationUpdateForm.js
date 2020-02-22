import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
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
import { validateUpdateForm } from '../../../../assets/utils/Validation';

const GraduationYears = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

const useStyles = makeStyles(() => ({
  textWrapper: {
    padding: '30px 20px 10px 0px',
  },
}));

const ApplicationUpdateForm = ({ ...props }) => {
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
    errors: {},
    loading: false,
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

  const handleErrors = (err) => {
    setValues({ ...values, errors: err });
  };

  const handleLoading = (val) => {
    setValues({ ...values, loading: val });
  };

  const submit = async () => {
    try {
      handleLoading(true);
      const errors = validateUpdateForm(values);
      if (Object.keys(errors).length !== 0) {
        throw errors;
      }

      await props.submitApplication(values);

      handleLoading(false);
    } catch (err) {
      handleErrors(err);
    }
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
                <Grid item xs={12} sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="First Name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      error={!!values.errors.firstName}
                      id="First"
                      inputProps={{
                        type: 'text',
                        error: !!values.errors.firstName,
                        onChange: handleState('firstName'),
                      }}
                    />
                    {values.errors.firstName
                      ? <FormHelperText error>{values.errors.firstName}</FormHelperText>
                      : null}
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Last Name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      error={!!values.errors.lastName}
                      id="Last"
                      inputProps={{
                        type: 'text',
                        error: !!values.errors.lastName,
                        onChange: handleState('lastName'),
                      }}
                    />
                    {values.errors.lastName
                      ? <FormHelperText error>{values.errors.lastName}</FormHelperText>
                      : null}
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
                <Grid item xs={12} sm={12}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      error={!!values.errors.email}
                      id="Email"
                      inputProps={{
                        type: 'email',
                        onChange: handleState('email'),
                        error: !!values.errors.email,
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
                    {values.errors.email
                      ? <FormHelperText error>{values.errors.email}</FormHelperText>
                      : null}
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
                      error={!!values.errors.phoneNumber}
                      id="PhoneNumber"
                      inputProps={{
                        type: 'tel',
                        value: normalizeInput(values.phoneNumber),
                        error: !!values.errors.phoneNumber,
                        onChange: handleState('phoneNumber'),
                      }}
                    />
                  </div>
                  {values.errors.phoneNumber
                    ? <FormHelperText error>{values.errors.phoneNumber}</FormHelperText>
                    : null}
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <div className={classes.textWrapper}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        format="MM/dd/yyyy"
                        id="dateOfBirth"
                        fullWidth
                        error={!!values.errors.dateOfBirth}
                        label="Date of Birth"
                        value={values.dateOfBirth}
                        onChange={handleDateChange}
                      />
                    </MuiPickersUtilsProvider>
                    {values.errors.dateOfBirth
                      ? <FormHelperText error>{values.errors.dateOfBirth}</FormHelperText>
                      : null}
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <div className={classes.textWrapper}>
                    <FormControl fullWidth>
                      <InputLabel error={!!values.errors.gender} id="gender">Gender</InputLabel>
                      <Select
                        id="gender"
                        fullWidth
                        error={!!values.errors.gender}
                        value={values.gender}
                        onChange={handleState('gender')}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                        <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
                      </Select>
                      {values.errors.gender
                        ? <FormHelperText error>{values.errors.gender}</FormHelperText>
                        : null}
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
                      <InputLabel error={!!values.errors.shirtSize} id="shirtSize">Shirt Size</InputLabel>
                      <Select
                        id="shirtSize"
                        fullWidth
                        error={!!values.errors.shirtSize}
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
                      {values.errors.shirtSize
                        ? <FormHelperText error>{values.errors.shirtSize}</FormHelperText>
                        : null}
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Ethnicity"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      error={!!values.errors.ethnicity}
                      id="Ethnicity"
                      inputProps={{
                        onChange: handleState('ethnicity'),
                        error: !!values.errors.ethnicity,
                      }}
                    />
                    {values.errors.ethnicity
                      ? <FormHelperText error>{values.errors.ethnicity}</FormHelperText>
                      : null}
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12} sm={12}>
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
                <Grid item xs={12}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="School"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      error={!!values.errors.school}
                      id="School"
                      inputProps={{
                        type: 'text',
                        onChange: handleState('school'),
                        error: !!values.errors.school,
                      }}
                    />
                    {values.errors.school
                      ? <FormHelperText error>{values.errors.school}</FormHelperText>
                      : null}
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
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <div className={classes.textWrapper}>
                    <FormControl fullWidth>
                      <InputLabel error={!!values.errors.graduationYear} id="graduationYear">Graduation Year</InputLabel>
                      <Select
                        id="graduationYear"
                        fullWidth
                        error={!!values.errors.graduationYear}
                        value={values.graduationYear}
                        onChange={handleState('graduationYear')}
                      >
                        {GraduationYears.map((year) => (
                          <MenuItem key={year} value={year}>{year}</MenuItem>
                        ))}
                      </Select>
                      {values.errors.graduationYear
                        ? <FormHelperText error>{values.errors.graduationYear}</FormHelperText>
                        : null}
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <div className={classes.textWrapper}>
                    <FormControl fullWidth>
                      <InputLabel error={!!values.errors.levelOfStudy} id="levelOfStudy">Level of Study</InputLabel>
                      <Select
                        id="levelOfStudy"
                        fullWidth
                        error={!!values.errors.levelOfStudy}
                        value={values.levelOfStudy}
                        onChange={handleState('levelOfStudy')}
                      >
                        <MenuItem value="Undergraduate">Undergraduate</MenuItem>
                        <MenuItem value="Graduate">Graduate</MenuItem>
                        <MenuItem value="High School">High School</MenuItem>
                      </Select>
                      {values.errors.levelOfStudy
                        ? <FormHelperText error>{values.errors.levelOfStudy}</FormHelperText>
                        : null}
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Major"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="major"
                      inputProps={{
                        type: 'major',
                        onChange: handleState('major'),
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
                <Grid item xs={12}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Dietary Restrictions"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="dietaryRestrictions"
                      inputProps={{
                        type: 'text',
                        onChange: handleState('dietaryRestrictions'),
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
                <Grid item xs={12}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Special Needs"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      id="specialNeeds"
                      inputProps={{
                        type: 'text',
                        onChange: handleState('specialNeeds'),
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
                <Grid item xs={12} sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Emergency Name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      error={!!values.errors.emergencyName}
                      id="emergencyName"
                      inputProps={{
                        type: 'text',
                        onChange: handleState('emergencyName'),
                        error: !!values.errors.emergencyName,
                      }}
                    />
                    {values.errors.emergencyName
                      ? <FormHelperText error>{values.errors.emergencyName}</FormHelperText>
                      : null}
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className={classes.textWrapper}>
                    <CustomInput
                      labelText="Emergency Number"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      error={!!values.errors.emergencyNumber}
                      id="emergencyNumber"
                      inputProps={{
                        type: 'tel',
                        value: normalizeInput(values.emergencyNumber),
                        error: !!values.errors.emergencyNumber,
                        onChange: handleState('emergencyNumber'),
                      }}
                    />
                    {values.errors.emergencyNumber
                      ? <FormHelperText error>{values.errors.emergencyNumber}</FormHelperText>
                      : null}
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className={classes.textWrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ height: '100%', width: '100%' }}
                  type="submit"
                  onClick={submit}
                >
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
