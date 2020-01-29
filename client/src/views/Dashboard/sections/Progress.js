import React from 'react'

import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

const Progress = ({ classes }) => {
	return (
		<Grid
			container
			direction="column"
			justify="center"
			align="center"
			className={classes.dash}
		>
			<Grid item>
				<CircularProgress style={{ height: "auto", width: 70 }} />
			</Grid>
		</Grid>
	)
}

export default Progress