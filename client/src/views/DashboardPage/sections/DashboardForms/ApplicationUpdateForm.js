import React, { useContext, useState, useEffect } from 'react';

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
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import CustomInput from '../../../../components/CustomInput/CustomInput';
import { validateUpdateForm } from '../../../../assets/utils/Validation';
import { store } from '../../../../context/store'
import UPDATE_USER from '../../../../context/types';

const GraduationYears = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

const useStyles = makeStyles(() => ({
  textWrapper: {
    padding: '30px 20px 10px 0px',
  },
  progress: {
    height: 'auto',
    width: 70,
  },
  loadingGrid: {
    height: '100%',
    position: 'absolute',
    zIndex: '100',
  },
  buttonWrapper: {
    padding: '5px 20px 10px 0px',
  },
}));

const ApplicationUpdateForm = ({ ...props }) => {
  const { state, dispatch } = useContext(store);

  const { formErrors } = props;
  const [values, setValues] = useState({
    email: state.email,
    firstName: state.profile.firstName ? state.profile.firstName : '',
    lastName: state.profile.lastName ? state.profile.lastName : '',
    phoneNumber: state.profile.phoneNumber ? state.profile.phoneNumber : '',
    dateOfBirth: state.profile.dateOfBirth ? state.profile.dateOfBirth : null,
    shirtSize: state.profile.shirtSize ? state.profile.shirtSize : '',
    gender: state.profile.gender ? state.profile.gender : '',
    ethnicity: state.profile.ethnicity ? state.profile.ethnicity : '',
    github: state.profile.github ? state.profile.github : '',
    linkedin: state.profile.linkedin ? state.profile.linkedin : '',
    website: state.profile.website ? state.profile.website : '',
    school: state.profile.school ? state.profile.school : '',
    graduationYear: state.profile.graduationYear ? state.profile.graduationYear : '',
    levelOfStudy: state.profile.levelOfStudy ? state.profile.levelOfStudy : '',
    major: state.profile.major ? state.profile.major : '',
    dietaryRestrictions: state.profile.dietaryRestrictions ? state.profile.dietaryRestrictions : '',
    specialNeeds: state.profile.specialNeeds ? state.profile.specialNeeds : '',
    emergencyName: state.profile.emergencyName ? state.profile.emergencyName : '',
    emergencyNumber: state.profile.emergencyNumber ? state.profile.emergencyNumber : '',
    resume: { name: 'Upload Resume' },
    errors: formErrors,
    loading: false,
    success: false,
    disableAll: !state.isVerified
  });

  useEffect(() => {
    if (state.profile) {
      handleSetState("firstName", state.profile.firstName)
      handleSetState("lastName", state.profile.lastName)
      handleSetState("phoneNumber", state.profile.phoneNumber)
      handleSetState("dateOfBirth", state.profile.dateOfBirth)
      handleSetState("shirtSize", state.profile.shirtSize)
      handleSetState("gender", state.profile.gender)
      handleSetState("ethnicity", state.profile.ethnicity)
      handleSetState("github", state.profile.github)
      handleSetState("linkedin", state.profile.linkedin)
      handleSetState("website", state.profile.website)
      handleSetState("school", state.profile.school)
      handleSetState("graduationYear", state.profile.graduationYear)
      handleSetState("levelOfStudy", state.profile.levelOfStudy)
      handleSetState("major", state.profile.major)
      handleSetState("dietaryRestrictions", state.profile.dietaryRestrictions)
      handleSetState("specialNeeds", state.profile.specialNeeds)
      handleSetState("emergencyName", state.profile.emergencyName)
      handleSetState("emergencyNumber", state.profile.emergencyNumber)
      console.log(values)
    }

    // eslint-disable-next-line
  }, []) 

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

  const normalize = (str) => str.replace(/[- )(]/g, '');

  const handleState = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleFileUpload = () => (event) => {
    setValues({ ...values, resume: event.target.files[0] });
  };

  const handleSetState = (key, val) => {
    setValues({ ...values, [key]: val });
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

  const handleClose = () => {
    setValues({ ...values, success: false });
  };

  const submit = async () => {
    try {
      handleLoading(true);
      const errors = validateUpdateForm(values);
      if (Object.keys(errors).length !== 0) {
        throw errors;
      }
      handleErrors({});

      const data = {
        ...values,
        phoneNumber: normalize(values.phoneNumber),
        emergencyNumber: normalize(values.emergencyNumber),
      };

      const newUser = {
        ...state,
        profile: data
      }

      await props.submitApplication(data);
      dispatch({ type: UPDATE_USER, payload: newUser })

      handleLoading(false);
      handleSetState('success', true);
    } catch (err) {
      handleErrors(err);
    }
  };

  const classes = useStyles();
  return (
    <>
      {values.loading
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
                          value: values.firstName,
                          disabled: values.loading || values.disableAll,
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
                          value: values.lastName,
                          disabled: values.loading || values.disableAll,
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
                          disabled: true,
                          value: values.email,
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
                          disabled: values.loading || values.disableAll,
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
                          disabled={values.loading || values.disableAll}
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
                          disabled={values.loading || values.disableAll}
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
                          disabled={values.loading || values.disableAll}
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
                          value: values.ethnicity,
                          disabled: values.loading || values.disableAll,
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
                        error={!!values.errors.github}
                        id="github"
                        inputProps={{
                          type: 'text',
                          onChange: handleState('github'),
                          value: values.github,
                          disabled: values.loading || values.disableAll,
                          error: !!values.errors.github,
                        }}
                      />
                      {values.errors.github
                        ? <FormHelperText error>{values.errors.github}</FormHelperText>
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
                        labelText="Linkedin"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        error={!!values.errors.linkedin}
                        id="linkedin"
                        inputProps={{
                          type: 'text',
                          onChange: handleState('linkedin'),
                          value: values.linkedin,
                          disabled: values.loading || values.disableAll,
                          error: !!values.errors.linkedin,
                        }}
                      />
                      {values.errors.linkedin
                        ? <FormHelperText error>{values.errors.linkedin}</FormHelperText>
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
                        labelText="Website"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        error={!!values.errors.website}
                        id="website"
                        inputProps={{
                          type: 'text',
                          onChange: handleState('website'),
                          value: values.website,
                          disabled: values.loading || values.disableAll,
                          error: !!values.errors.website,
                        }}
                      />
                      {values.errors.website
                        ? <FormHelperText error>{values.errors.website}</FormHelperText>
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
                          disabled: values.loading || values.disableAll,
                          value: values.school,
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
                          disabled={values.loading || values.disableAll}
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
                          disabled={values.loading || values.disableAll}
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
                          value: values.major,
                          disabled: values.loading || values.disableAll,
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
                          value: values.dietaryRestrictions,
                          disabled: values.loading || values.disableAll,
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
                          value: values.specialNeeds,
                          disabled: values.loading || values.disableAll,
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
                          disabled: values.loading || values.disableAll,
                          value: values.emergencyName,
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
                          disabled: values.loading || values.disableAll,
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
                <div className={classes.buttonWrapper}>
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={handleFileUpload()}
                  />
                  <label htmlFor="contained-button-file">
                    <Button color="primary" component="span" style={{ height: '100%', width: '100%' }}>
                      {values.resume.name}
                    </Button>
                  </label>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.buttonWrapper}>
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
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={values.success}
          onClose={handleClose}
          autoHideDuration={1500}
          style={{ marginTop: 100 }}
          message="Updated!"
        />
      </Grid>
    </>
  );
};

export default ApplicationUpdateForm;
