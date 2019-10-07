import React from 'react'
import { withStyles, Grid, Typography, Paper } from '@material-ui/core'
import sponsorStyles from '../styles/sponsorStyles'

const Sponsors = ({ ...props }) => {
	const { classes } = props

	return (
		<Paper className={classes.outer}>
			<Grid
				container
			  	direction="row"
			  	justify="center"
			  	alignItems="center"
			>
				<Grid item xs={12} sm md>
					<div className={classes.wrapper}>
						<Typography variant="h5" align="center">
							Our Sponsors:
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} sm md>
					<div className={classes.wrapper}>
						<Typography variant="body1" align="center">
							Google
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} sm md>
					<div className={classes.wrapper}>
						<Typography variant="body1" align="center">
							UPS
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} sm md>
					<div className={classes.wrapper}>
						<Typography variant="body1" align="center">
							Montclair State University
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} sm md>
					<div className={classes.wrapper}>
						<Typography variant="body1" align="center">
							Your mom
						</Typography>
					</div>
				</Grid>
			</Grid>
		</Paper>
	)	
}							

export default withStyles(sponsorStyles)(Sponsors)