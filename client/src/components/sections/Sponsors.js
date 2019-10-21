import React from 'react'
import { withStyles, Grid, Typography, Paper } from '@material-ui/core'
import sponsorStyles from '../styles/sponsorStyles'

const Sponsors = ({ ...props }) => {
	const { classes } = props

	return (
		<div className={classes.image}>
			<div className={classes.grad}>
				<div className={classes.wholeWrapper}>
					<div className={classes.title}>
						<Typography variant="h2" align="center">
							our sponsors
						</Typography>
					</div>
					<Grid
					  container
					  direction="column"
					  justify="center"
					  alignItems="center"
					>	
						<Grid item>
							<Grid
							  container
							  direction="row"
							  justify="center"
							  alignItems="center"
							>
								<Grid item xs={12} sm={12} md>
									<div className={classes.wrapper}>
										<Typography variant="h4" align="center">
											Google
										</Typography>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md>
									<div className={classes.wrapper}>
										<Typography variant="h4" align="center">
											UPS
										</Typography>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md>
									<div className={classes.wrapper}>
										<Typography variant="h4" align="center">
											Montclair State University
										</Typography>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md>
									<div className={classes.wrapper}>
										<Typography variant="h4" align="center">
											your mom
										</Typography>
									</div>
								</Grid>
							</Grid>
						</Grid> 
						<Grid item>
							<Grid
							  container
							  direction="row"
							  justify="center"
							  alignItems="center"
							>
								<Grid item xs={12} sm={12} md>
									<div className={classes.wrapper}>
										<Typography variant="h4" align="center">
											Google
										</Typography>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md>
									<div className={classes.wrapper}>
										<Typography variant="h4" align="center">
											UPS
										</Typography>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md>
									<div className={classes.wrapper}>
										<Typography variant="h4" align="center">
											Montclair State University
										</Typography>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md>
									<div className={classes.wrapper}>
										<Typography variant="h4" align="center">
											your mom
										</Typography>
									</div>
								</Grid>
							</Grid>
						</Grid> 
						<Grid item>
							<Grid
							  container
							  direction="row"
							  justify="center"
							  alignItems="center"
							>
								<Grid item xs={12} sm={12} md>
									<div className={classes.wrapper}>
										<Typography variant="h4" align="center">
											Google
										</Typography>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md>
									<div className={classes.wrapper}>
										<Typography variant="h4" align="center">
											UPS
										</Typography>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md>
									<div className={classes.wrapper}>
										<Typography variant="h4" align="center">
											Montclair State University
										</Typography>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md>
									<div className={classes.wrapper}>
										<Typography variant="h4" align="center">
											your mom
										</Typography>
									</div>
								</Grid>
							</Grid>
						</Grid> 
					</Grid>
				</div>
			</div>	
		</div>
	)	
}							

export default withStyles(sponsorStyles)(Sponsors)