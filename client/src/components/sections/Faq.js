import React from 'react'
import { withStyles, Paper, Grid, Typography } from '@material-ui/core'
import faqStyles from '../styles/faqStyles'

const Faq = ({ ...props }) => {
    const { classes } = props
    return (
    	<Paper>
	    	<div className={classes.image}>
	    		<div className={classes.grad}>
	    			<Grid
	    			  container
	    			  direction="row"
	    			  justify="center"
	    			  alignItems="center"
	    			>
	    				<Grid item>
	    					<div className={classes.wrapper}>
		    					<Typography variant="h1">
		    						FAQ
		    					</Typography>
	    					</div>
	    				</Grid>
	    			</Grid>
		    		<Grid
		    		  container
		    		  direction="row"
		    		  justify="center"
		    		  alignItems="center"
		    		>
		    			<Grid item xs={12} sm={6} md={6}>
		    				<Grid
		    				  container
		    				  direction="column"
		    				  justify="center"
		    				  alignItems="center"
		    				>
		    					<Grid item>
		    						<Typography variant="h3" align="center">
		    							item 1
		    						</Typography>
		    						<Typography variant="h5" align="center">
		    							item 2
		    						</Typography>
		    					</Grid>
		    					<Grid item>
		    						<Typography variant="h3" align="center">
		    							item 1
		    						</Typography>
		    						<Typography variant="h5" align="center">
		    							item 2
		    						</Typography>
		    					</Grid>		    					
		    					<Grid item>
		    						<Typography variant="h3" align="center">
		    							item 1
		    						</Typography>
		    						<Typography variant="h5" align="center">
		    							item 2
		    						</Typography>
		    					</Grid>
		    					<Grid item className={classes.bottomItem}> 
		    						<Typography variant="h3" align="center">
		    							item 1
		    						</Typography>
		    						<Typography variant="h5" align="center">
		    							item 2
		    						</Typography>
		    					</Grid>
		    				</Grid>
		    			</Grid>	
		    			<Grid item xs={12} sm={6} md={6}>
							<Grid
							  container
							  direction="column"
							  justify="center"
							  alignItems="center"
							>
								<Grid item>
									<Typography variant="h3" align="center">
										item 1
									</Typography>
									<Typography variant="h5" align="center">
										item 2
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="h3" align="center">
										item 1
									</Typography>
									<Typography variant="h5" align="center">
										item 2
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="h3" align="center">
										item 1
									</Typography>
									<Typography variant="h5" align="center">
										item 2
									</Typography>
								</Grid>
								<Grid item className={classes.bottomItem}>
									<Typography variant="h3" align="center">
										item 1
									</Typography>
									<Typography variant="h5" align="center">
										item 2
									</Typography>
								</Grid>
							</Grid>
		    			</Grid>
		    		</Grid>
	    		</div>
	    	</div>
	    </Paper>
    )
}

export default withStyles(faqStyles)(Faq)