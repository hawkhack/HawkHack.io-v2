import axios from 'axios';

let apiURL = process.env.REACT_APP_DEV_API_URL;

if (process.env.NODE_ENV === 'production') {
  apiURL = process.env.REACT_APP_API_URL;
}

export const RegisterUser = (email, password, password2) => axios.post(`${apiURL}/u/register`, {
  email,
  password,
  password2,
})
  .then((result) => result)
  .catch((err) => {
    throw err.response.data;
  });

export const LoginUser = (email, password) => axios.post(`${apiURL}/u/login`, {
  email,
  password,
})
  .then((result) => result)
  .catch((err) => {
    throw err.response.data;
  });

export const GetUser = () => axios.get(`${apiURL}/u/`, {
  headers: { Authorization: `${localStorage.getItem('cool-jwt')}` },
})
  .then((result) => result)
  .catch((err) => {
    throw err;
  });

export const ForgotPassword = (email) => axios.get(`${apiURL}/u/resetpw/${email}`)
  .then(((result) => result))
  .catch((err) => {
    throw err;
  });

export const ResetPass = (token, password, password2) => axios.post(`${apiURL}/u/resetpw/${token}`, {
  password,
  password2,
})
  .then((result) => result)
  .catch((err) => {
    throw err;
  });

export const VerifyUser = (token) => axios.get(`${apiURL}/u/verify/${token}`)
  .then((result) => result)
  .catch((err) => {
    throw err.response.data;
  });

export const ResendVerifyEmail = () => axios.get(`${apiURL}/u/reverify`, {
  headers: { Authorization: `${localStorage.getItem('cool-jwt')}` },
})
  .then((result) => result)
  .catch((err) => {
    throw err;
  });

export const UpdateApplication = (user) => axios.post(`${apiURL}/p/`, {
  firstName: user.firstName,
  lastName: user.lastName,
  phoneNumber: user.phoneNumber,
  dateOfBirth: user.dateOfBirth,
  shirtSize: user.shirtSize,
  gender: user.gender,
  ethnicity: user.ethnicity,
  github: user.github,
  linkedin: user.linkedin,
  website: user.website,
  school: user.school,
  graduationYear: user.graduationYear,
  levelOfStudy: user.levelOfStudy,
  major: user.major,
  dietaryRestrictions: user.dietaryRestrictions,
  specialNeeds: user.specialNeeds,
  emergencyName: user.emergencyName,
  emergencyNumber: user.emergencyNumber,
}, {
  headers: { Authorization: `${localStorage.getItem('cool-jwt')}` },
})
  .then((result) => result)
  .catch((err) => {
    throw err.response.data;
  });
