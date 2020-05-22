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
    if (err.response) throw err.response.data
    throw err;
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

export const UpdateApplication = (profile) => axios.post(`${apiURL}/p/`, profile, {
  headers: {
    'Authorization': `${localStorage.getItem('cool-jwt')}`,
    'Content-Type': 'multipart/form-data'
  },
})
  .then((result) => result)
  .catch((err) => {
    throw err.response.data;
  });
