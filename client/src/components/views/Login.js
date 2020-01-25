import React, { Component, Fragment } from 'react' 

import { Grid, Paper, withStyles, Typography, CssBaseline } from '@material-ui/core'

import LoginForm from '../../components/forms/LoginForm'

import loginStyles from '../styles/loginStyles'

const Login = () => {
	const classes = loginStyles();	
	return (
		<Fragment>
			<div className={classes.login}>
				<CssBaseline />
			    <Grid
			        container
			        direction="row"
			        justify="center"
			        alignItems="center"
			        style={{height: "100vh"}}
			    >
			        <Grid item xs={12} sm={12} md={4}>
			        	<div className={classes.signIn}>
						    <Typography variant="h1" align="left" color="secondary" style={{marginBottom: "-12px", fontFamily: "Dancing Script, cursive", textShadow: "1px 1px #000000"}} >
			                    Sign In
		                	</Typography>
		                </div>
			            <Paper className={classes.paper}>
			            	<div className={classes.outer}>
				                <LoginForm
				                    
				                />
				            </div>
			            </Paper>
			        </Grid>
			    </Grid>
			</div>
		</Fragment>
	)
}

export default Login