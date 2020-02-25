import React from 'react'

import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = () => (
	<Grid 
		container
		justify="center"
		align="center"
		direction="column"
		style={{ height: "100vh" }}
	>
		<Grid item>
			<CircularProgress color="primary" />
		</Grid>
	</Grid>
)

export default Loading