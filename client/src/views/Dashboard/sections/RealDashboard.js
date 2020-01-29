import React from 'react';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const RealDashboard = ({ classes }) => {
	return (
		<Grid
		  container
		  direction="column"
		  justify="center"
		  align="center"
		  className={classes.dash}
		>
		  <Grid item>
		  	<Typography
		  		variant="h2"
		  		color="primary"
		  	>
		    	Real dash
		   	</Typography>
		  </Grid> 
		</Grid>
	)
}

export default RealDashboard