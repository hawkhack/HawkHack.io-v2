import React, { Fragment, useState } from 'react' 

import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from "@material-ui/icons/Email";

import LoginForm from '../../components/forms/LoginForm'
import NavBar from '../../components/sections/NavBar'

import loginStyles from '../styles/loginStyles'

const Login = ({ ...props }) => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		errors: {}
	})

	const handleChange = prop => event => {
	  setValues({ ...values, [prop]: event.target.value });
	};

	const handleErrors = (errors) => {
	  setValues({ ...values, errors: errors })
	}

	const classes = loginStyles();	

	const submit = async () => {
		// validate
		await axios.post("http://dev.hawkhack.io/api/u/login", {
			email: values.email,
			password: values.password
		})
		.then(result => {
			if (result.data.success) {
				localStorage.setItem("cool-jwt", result.data.token)
				props.history.push("/dashboard")
			}
		})
		.catch(err => handleErrors(err.response.data))
	}

	return (
		<Fragment>
			<CssBaseline />
			<NavBar />
			<div className={classes.login}>
				<div className={classes.container}>
				    <Grid
				        container
				        direction="row"
				        justify="center"
				        alignItems="center"
				        className={classes.gridContainer}
				    >
				        <Grid item xs={12} sm={8} md={4} lg={4} className={classes.gridItem}>
				        	<div className={classes.card}>
				        		<form className={classes.form}>
				        			<div className={classes.cardHeader}>
				        				<h1>Login</h1>
				        			</div>
				        			<div className={classes.cardBody}>
				        				<FormControl className={classes.formControl}>
					        				<InputLabel htmlFor="email">Email</InputLabel>
					        				<Input
					        				  id="email"
					        				  onChange={handleChange('email')}
					        				  type={'text'}
					        				  endAdornment={
					        				    <InputAdornment position="end">
					        				    	<Email className={classes.inputIconsColor} />
					        				    </InputAdornment>
					        				  }
					        				/>
					        				{values.errors.email ? <FormHelperText error>{values.errors.email}</FormHelperText> : null}
				        				</FormControl>
				        				<FormControl className={classes.formControl}>
					        				<InputLabel htmlFor="Password">Password</InputLabel>
					        				<Input
					        					id="Password"
					        				    type={'password'}
					        				    onChange={handleChange('password')}
					        				  	endAdornment={
					        				    	<InputAdornment position="end">
					        				    		<Email className={classes.inputIconsColor} />
					        				    	</InputAdornment>
					        				  	}
					        				/>
					        				{values.errors.password ? <FormHelperText error>{values.errors.password}</FormHelperText> : null}
				        				</FormControl>
				        			</div>
				        			<div className={classes.cardFooter}>
				        				<Button 
				        					variant="contained" 
				        					color="primary" 
				        					className={classes.button}
				        					onClick={submit}
				        				>
				        					Submit
				        				</Button>
				        			</div>
				        			<div className={classes.cardFooter}>
				        				<Button color="primary"className={classes.button}>
				        					Forgot Password?
				        				</Button>
				        			</div>
				        		</form>
				        	</div>
				        </Grid>
				    </Grid>
			    </div>
			</div>
		</Fragment>
	)
}

export default Login