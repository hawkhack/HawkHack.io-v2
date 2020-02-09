import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

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

export const ResetPass = (token, password) => axios.post(`${apiURL}/u/resetpw/${token}`, {
  token,
  password,
})
  .then((result) => result)
  .catch((err) => {
    throw err;
  });

export const VerifyUser = (token) => axios.get(`${apiURL}/u/verify/${token}`)
  .then((result) => result)
  .catch((err) => {
    throw err;
  });

export const ResendVerifyEmail = () => axios.get(`${apiURL}/u/reverify`, {
  headers: { Authorization: `${localStorage.getItem('cool-jwt')}` },
})
  .then((result) => result)
  .catch((err) => {
    throw err;
  });
