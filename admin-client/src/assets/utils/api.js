import axios from 'axios'

let apiURL = process.env.REACT_APP_API_URL;

if (process.env.NODE_ENV === 'production') {
  apiURL = process.env.REACT_APP_API_URL;
}

export const LoginUser = (email, password) => axios.post(`${apiURL}/u/login`, {
  email,
  password,
})
  .then((result) => result)
  .catch((err) => {
    throw err.response.data;
  });

export const GetUser = () => axios.get(`${apiURL}/u/`, {
  headers: { Authorization: `${localStorage.getItem('admin-jwt')}` },
})
  .then((result) => result.data)
  .catch((err) => {
    throw err;
  });
