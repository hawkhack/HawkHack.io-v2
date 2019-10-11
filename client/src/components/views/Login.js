import React, { Component, Fragment } from 'react' 

import { Grid, Paper, withStyles, Typography, } from '@material-ui/core'

import BackgroundSlider from 'react-background-slider'
import image1 from '../styles/pictures/beach.jpg'
import image2 from '../styles/pictures/background1.jpg'
import LoginForm from '../../components/forms/LoginForm'

import loginStyles from '../styles/loginStyles'

class Login extends Component {

	render() {
		const { classes } = this.props
		return (
			<Fragment>
				<BackgroundSlider 
				    images={[image1, image2]}
				    duration={1} transition={2} 
				/>
			    <Grid
			        container
			        direction="row"
			        justify="center"
			        alignItems="center"
			        style={{height: "100vh"}}
			    >
			        <Grid item xs sm={12} md={6}>
			            <Paper className={classes.paper}>
			            	<div className={classes.outer}>
				                <Typography variant="h2" align="center" color="primary">
				                    Sign In
			                	</Typography>
				                <LoginForm
				                    submit={this.submit}
				                />
				            </div>
			            </Paper>
			        </Grid>
			    </Grid>
			</Fragment>
		)
	}
}

export default withStyles(loginStyles)(Login)