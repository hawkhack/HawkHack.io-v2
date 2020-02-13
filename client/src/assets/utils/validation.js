import Validator from 'validator';

const BLANK_EMAIL = 'Email cannot be blank';
const BLANK_PASSWORD = 'Password cannot be empty';

const INVALID_EMAIL = 'Email is invalid';
const NO_PASSWORD_MATCH = "Passwords don't match";

const validateLogin = (email, password) => {
  const errors = {};
  if (!Validator.isEmail(email)) errors.email = INVALID_EMAIL;

  if (!password) errors.password = BLANK_PASSWORD;

  if (email.length === 0) {
    errors.email = BLANK_EMAIL;
  }
  return errors;
};

const validateRegister = (email, password, password2) => {
  const errors = {};

  if (!Validator.isEmail(email)) errors.email = INVALID_EMAIL;
  if (!password) errors.password = BLANK_PASSWORD;

  if (password !== password2) errors.password2 = NO_PASSWORD_MATCH;

  if (email.length === 0) {
    errors.email = BLANK_EMAIL;
  }

  return errors;
};

const isEmail = (email) => {
  const errors = {};

  if (!Validator.isEmail(email)) {
    errors.forgotEmail = INVALID_EMAIL;
  }

  if (email.length === 0) {
    errors.forgotEmail = BLANK_EMAIL;
  }

  return errors;
};

const validateResetPassword = (password, password2) => {
  const errors = {};

  if (!password) errors.password = BLANK_PASSWORD;
  if (!password2) errors.password2 = BLANK_PASSWORD;
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

export {
  validateLogin,
  validateRegister,
  isEmail,
  validateResetPassword,
  validateResetToken,
};
