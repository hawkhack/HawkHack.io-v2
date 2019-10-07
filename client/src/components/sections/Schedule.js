import React from 'react'
import { withStyles, Typography, Paper } from '@material-ui/core'
import scheduleStyles from '../styles/scheduleStyles'

const Schedule = ({ ...props }) => {
	const { classes } = props
	return (
		<div> 
			<Paper className={classes.paper} >
				<Typography>
					this is where the Schedule is going to go
				</Typography>
			</Paper>
		</div>
	)
}

export default withStyles(scheduleStyles)(Schedule)