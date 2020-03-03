import Validator from 'validator';

const BLANK_EMAIL = 'Email cannot be blank';
const BLANK_PASSWORD = 'Password cannot be empty';

const INVALID_EMAIL = 'Email is invalid';
const NO_PASSWORD_MATCH = "Passwords don't match";

const checkLength = (val) => val.length === 0;

const validateLogin = (email, password) => {
  const errors = {};
  if (!Validator.isEmail(email)) errors.email = INVALID_EMAIL;

  if (!password) errors.password = BLANK_PASSWORD;

  if (checkLength(email)) {
    errors.email = BLANK_EMAIL;
  }
  return errors;
};

const validateRegister = (email, password, password2) => {
  const errors = {};

  if (!Validator.isEmail(email)) errors.email = INVALID_EMAIL;
  if (!password) errors.password = BLANK_PASSWORD;

  if (password !== password2) errors.password2 = NO_PASSWORD_MATCH;

  if (checkLength(email)) {
    errors.email = BLANK_EMAIL;
  }

  return errors;
};

const isEmail = (email) => {
  const errors = {};

  if (!Validator.isEmail(email)) {
    errors.forgotEmail = INVALID_EMAIL;
  }

  if (checkLength(email)) {
    errors.forgotEmail = BLANK_EMAIL;
  }

  return errors;
};

const validateResetPassword = (password, password2) => {
  const errors = {};

  if (!password || checkLength(password)) errors.password = BLANK_PASSWORD;
  if (!password2 || checkLength(password2)) errors.password2 = BLANK_PASSWORD;
  if (password !== password2) errors.password2 = NO_PASSWORD_MATCH;

  return errors;
};

const validateResetToken = (token) => {
  const errors = {};
  if (token.length === 0) {
    errors.token = 'Token is invalid';
  }
  return errors;
};

const validateUpdateForm = (app) => {
  const errors = {};

  if (checkLength(app.firstName)) errors.firstName = 'Invalid First Name';
  if (app.firstName.length <= 2 || app.firstName >= 20 ) errors.firstName = 'Must be between 2 and 20 characters';
  if (checkLength(app.lastName)) errors.lastName = 'Invalid Last Name';
  if (app.lastName.length <= 2 || app.lastName >= 20 ) errors.lastName = 'Must be between 2 and 20 characters';

  if (checkLength(app.email)) errors.email = BLANK_EMAIL;
  if (!Validator.isEmail(app.email)) errors.email = INVALID_EMAIL;

  if (checkLength(app.phoneNumber)) errors.phoneNumber = 'Invalid Phone Number';
  if (!Validator.isMobilePhone(app.phoneNumber)) errors.phoneNumber = 'Invalid Phone Number';
  if (!app.dateOfBirth || checkLength(app.dateOfBirth)) errors.dateOfBirth = 'Invalid Date of Birth';

  const currYear = new Date().getFullYear()
  const birthYear = new Date(app.dateOfBirth).getFullYear()

  if (currYear - birthYear < 13 ) errors.dateOfBirth = 'Must be older than 13 years of age';
  if (checkLength(app.gender)) errors.gender = 'Invalid Gender';

  if (checkLength(app.shirtSize)) errors.shirtSize = 'Invalid Shirt Size';
  if (checkLength(app.ethnicity)) errors.ethnicity = 'Invalid Ethnicity';

  if (!checkLength(app.github) && !Validator.isURL(app.github)) errors.github = 'Invalid URL';
  if (!checkLength(app.linkedin) && !Validator.isURL(app.linkedin)) errors.linkedin = 'Invalid URL';
  if (!checkLength(app.website) && !Validator.isURL(app.website)) errors.website = 'Invalid URL';

  if (checkLength(app.school)) errors.school = 'Invalid School Name';
  if (app.school === "Other") {
    if (checkLength(app.otherSchool)) errors.otherSchool = 'Invalid School Name';
  }

  if (checkLength(app.graduationYear)) errors.graduationYear = 'Invalid Graduation Year';
  if (checkLength(app.levelOfStudy)) errors.levelOfStudy = 'Invalid Level of Study';
  if (checkLength(app.graduationYear)) errors.graduationYear = 'Invalid Graduation Year';

  if (checkLength(app.emergencyName)) errors.emergencyName = 'Invalid Emergency Name';
  if (app.emergencyName.length < 5 || app.emergencyName.length > 20) errors.emergencyName = 'Must be between 5 and 20 characters';
  if (!Validator.isMobilePhone(app.emergencyNumber)) errors.emergencyNumber = 'Invalid Emergency Number';

  if (app.dietaryRestrictions.length !== 0 && (app.dietaryRestrictions.length < 2 || app.dietaryRestrictions.length > 200)) errors.dietaryRestrictions = 'Must be between 2 and 200 characters';
  if (app.specialNeeds.length !== 0 && (app.specialNeeds.length < 2 || app.specialNeeds.length > 200)) errors.specialNeeds = 'Must be between 2 and 200 characters';

  if (app.resume.size && app.resume.size > 1024 * 1024 * 2) errors.resume = 'File too large'; 

  if (!app.agreeToTerms) errors.agreeToTerms = "Must agree to Terms and Conditions";
  if (!app.agreeCode) errors.agreeCode = "Must agree to Code of Conduct";

  return errors;
};

export {
  validateLogin,
  validateRegister,
  isEmail,
  validateResetPassword,
  validateResetToken,
  validateUpdateForm,
};
