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
	    		</div>
	    	</div>
	    </Paper>
    )
}

export default withStyles(faqStyles)(Faq)