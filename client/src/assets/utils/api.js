import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

export const RegisterUser = async (email, password, password2) => {
	return await axios.post(`${apiURL}/u/register`, {
	      email: email,
	      password: password,
	      password2: password2,
	    })
		.then(result => result)
		.catch(err => {
			throw err.response.data
		})
}

export const GetUser = async () => {
		return await axios.get(`${apiURL}/u/`, {
    		headers: {'Authorization': `${localStorage.getItem("cool-jwt")}`},
  		  })
	  		.then(result => result)
	  		.catch(err => {
	  			throw err
	  		})
}