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

export {
  validateLogin,
  validateRegister,
};
