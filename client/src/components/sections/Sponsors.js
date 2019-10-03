import React from 'react'
import { withStyles, Grid, Typography } from '@material-ui/core'
import sponsorStyles from '../styles/sponsorStyles'

const Sponsors = ({ ...props }) => {
	const { classes } = props

	return (
		<div className={classes.outer}>
			<Grid
				container
			  	direction="row"
			  	justify="center"
			  	alignItems="center"
			>
				<Grid item>
					<Typography variant="h5">
						this is for the sponsors 
					</Typography>
				</Grid>
				<Grid item>
					Google
				</Grid>
				<Grid item>
					UPS
				</Grid>
				<Grid item>
					Montclair State University
				</Grid>
				<Grid item>
					your mom
				</Grid>
			</Grid>
		</div>
	)	
}							

export default withStyles(sponsorStyles)(Sponsors)