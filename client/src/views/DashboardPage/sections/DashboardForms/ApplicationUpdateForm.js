import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import makeStyles from '@material-ui/styles/makeStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import CustomInput from '../../../../components/CustomInput/CustomInput';
import { validateUpdateForm } from '../../../../assets/utils/Validation';

const GraduationYears = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];
const ethnicities = [
  'American Indian or Alaskan Native', 
  'Asian/Pacific Islander', 
  'Hispanic or Latino', 
  'Black or African American', 
  'White/Caucasian'
];

const Schools = [
  "Bloomfield College",
  "Caldwell University",
  "Clifton High School",
  "Kean University",
  "Leonia High School",
  "Monroe Township High School",
  "Montclair State University",
  "New Jersey Institute of Technology",
  "Ocean Township High School",
  "Passaic County Technical Institute",
  "Rutgers University - New Brunswick",
  "Rutgers University - Newark",
  "Seton Hall University",
  "The College of New Jersey",
  "William Paterson University",
  "Other"
]

const useStyles = makeStyles(() => ({
  textWrapper: {
    padding: '30px 10px 10px 10px',
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

const ApplicationUpdateForm = ({ user, ...props }) => {
  const [values, setValues] = useState({
    email: user.email,
    status: user.profile.status ? user.profile.status : '',
    firstName: user.profile.firstName ? user.profile.firstName : '',
    lastName: user.profile.lastName ? user.profile.lastName : '',
    phoneNumber: user.profile.phoneNumber ? user.profile.phoneNumber : '',
    dateOfBirth: user.profile.dateOfBirth ? user.profile.dateOfBirth : null,
    shirtSize: user.profile.shirtSize ? user.profile.shirtSize : '',
    gender: user.profile.gender ? user.profile.gender : '',
    ethnicity: user.profile.ethnicity ? user.profile.ethnicity : '',
    github: user.profile.github ? user.profile.github : '',
    linkedin: user.profile.linkedin ? user.profile.linkedin : '',
    website: user.profile.website ? user.profile.website : '',
    school: user.profile.school ? user.profile.school : '',
    graduationYear: user.profile.graduationYear ? user.profile.graduationYear : '',
    levelOfStudy: user.profile.levelOfStudy ? user.profile.levelOfStudy : '',
    major: user.profile.major ? user.profile.major : '',
    dietaryRestrictions: user.profile.dietaryRestrictions ? user.profile.dietaryRestrictions : '',
    specialNeeds: user.profile.specialNeeds ? user.profile.specialNeeds : '',
    emergencyName: user.profile.emergencyName ? user.profile.emergencyName : '',
    emergencyNumber: user.profile.emergencyNumber ? user.profile.emergencyNumber : '',
    resume: { name: 'Upload Resume' },
    otherSchool: "",
    errors: {},
    loading: false,
    disableAll: !user.isVerified
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

  const normalize = (str) => str.replace(/[- )(]/g, '');

  const handleState = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleFileUpload = () => (event) => {
    setValues({ ...values, resume: event.target.files[0] });
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

      const profile = {
        ...values,
        school: values.otherSchool.length > 0 ? values.otherSchool : values.school,
        phoneNumber: normalize(values.phoneNumber),
        emergencyNumber: normalize(values.emergencyNumber),
      };
      
      await props.submitApplication(profile);

      handleLoading(false);
      handleErrors({});
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
                          native
                          id="gender"
                          fullWidth
                          error={!!values.errors.gender}
                          value={values.gender}
                          disabled={values.loading || values.disableAll}
                          onChange={handleState('gender')}
                        >
                          <option value="" disabled></option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                          <option value="Prefer not to say">Prefer not to say</option>
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
                          native
                          id="shirtSize"
                          disabled={values.loading || values.disableAll}
                          fullWidth
                          error={!!values.errors.shirtSize}
                          value={values.shirtSize}
                          onChange={handleState('shirtSize')}
                        >
                          <option value="" disabled></option>
                          <option value="XXS">XXS</option>
                          <option value="XS">XS</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                        </Select>
                        {values.errors.shirtSize
                          ? <FormHelperText error>{values.errors.shirtSize}</FormHelperText>
                          : null}
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <div className={classes.textWrapper}>
                      <FormControl fullWidth>
                        <InputLabel error={!!values.errors.ethnicity} id="ethnicity">Ethnicity</InputLabel>
                        <Select
                          native
                          id="ethnicity"
                          disabled={values.loading || values.disableAll}
                          fullWidth
                          error={!!values.errors.ethnicity}
                          value={values.ethnicity}
                          onChange={handleState('ethnicity')}
                        >
                          <option value="" disabled></option>
                         {ethnicities.map(eth => (
                           <option key={eth} value={eth}>{eth}</option>
                          ))}
                        </Select>
                        {values.errors.ethnicity
                          ? <FormHelperText error>{values.errors.ethnicity}</FormHelperText>
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
                      <FormControl fullWidth>
                        <InputLabel error={!!values.errors.school} id="School">School</InputLabel>
                        <Select
                          native
                          id="School"
                          disabled={values.loading || values.disableAll}
                          fullWidth
                          error={!!values.errors.school}
                          value={values.school}
                          onChange={handleState('school')}
                        >
                          <option value="" disabled></option>
                          {Schools.map(school => (
                            <option key={school} value={school}>{school}</option>
                          ))}
                        </Select>
                        {values.errors.school
                          ? <FormHelperText error>{values.errors.school}</FormHelperText>
                          : null}
                      </FormControl>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {values.school === "Other" &&
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    align="center"
                  >
                    <Grid item xs={12}>
                      <div className={classes.textWrapper}>
                        <FormControl fullWidth>
                          <CustomInput
                            labelText="School"
                            formControlProps={{
                              fullWidth: true,
                            }}
                            id="otherSchool"
                            inputProps={{
                              type: 'text',
                              onChange: handleState('otherSchool'),
                              value: values.otherSchool,
                              disabled: values.loading || values.disableAll,
                            }}
                          />
                          {values.errors.school
                            ? <FormHelperText error>{values.errors.school}</FormHelperText>
                            : null}
                        </FormControl>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              }
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
                          native
                          id="graduationYear"
                          disabled={values.loading || values.disableAll}
                          fullWidth
                          error={!!values.errors.graduationYear}
                          value={values.graduationYear}
                          onChange={handleState('graduationYear')}
                        >
                          {GraduationYears.map((year) => (
                            <option key={year} value={year}>{year}</option>
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
                          native
                          id="levelOfStudy"
                          disabled={values.loading || values.disableAll}
                          fullWidth
                          error={!!values.errors.levelOfStudy}
                          value={values.levelOfStudy}
                          onChange={handleState('levelOfStudy')}
                        >
                          <option value="Undergraduate">Undergraduate</option>
                          <option value="Graduate">Graduate</option>
                          <option value="High School">High School</option>
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
                    disabled={values.loading || values.disableAll}
                    type="file"
                    onChange={handleFileUpload()}
                  />
                  <label htmlFor="contained-button-file">
                    <Button 
                      color="primary" 
                      component="span" 
                      style={{ height: '100%', width: '100%' }}
                      disabled={values.loading || values.disableAll}
                    >
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
                    disabled={values.loading || values.disableAll}
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
    </>
  );
};

export default ApplicationUpdateForm;
