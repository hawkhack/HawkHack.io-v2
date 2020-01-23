import React from 'react'
import { withStyles, Paper, Grid, Typography } from '@material-ui/core'
import faqStyles from '../styles/faqStyles'

const Faq = ({ ...props }) => {
    const { classes } = props
    return (
    	<div className={classes.wrapper}>
			<Grid
			  container
			  direction="row"
			  justify="center"
			  alignItems="center"
			>
				<Grid item>
    					<Typography variant="h1" color="primary">
    						faq
    					</Typography>
				</Grid>
			</Grid>
    		<Grid
    		  container
    		  direction="row"
    		  justify="center"
    		  alignItems="center"
    		>
    			<Grid item xs={12} sm={12} md={6}>
    				<Grid
    				  container
    				  direction="column"
    				  justify="center"
    				  alignItems="center"
    				>
    					<Grid item>
    						<div className={classes.faqWrapper}> 
    							<div className={classes.faqTitleWrapper}>
		    						<Typography variant="h4" align="center" color="primary">
		    							What is a hackathon?
		    						</Typography>
		    					</div>
	    						<Typography variant="body1" align="center">
	    							Hackathons are an intense event that bring together software
									developers, graphic designers and user interface specialists
									along with industry process experts and professionals to
									identify issues and create software solutions, usually within
									a weekend.
	    						</Typography>
	    					</div>
    					</Grid>
    					<Grid item>
    						<div className={classes.faqWrapper}>
    							<div className={classes.faqTitleWrapper}>
		    						<Typography variant="h4" align="center" color="primary">
		    							What is the goal of the hackathon?
		    						</Typography>
		    					</div>
	    						<Typography variant="body1" align="center">
	    							We want to create an environment that embraces new ideas and
					                technology solutions. A place where people passionate in
					                technology can come innovate the industry.
	    						</Typography>
    						</div>
    					</Grid>		    					
    					<Grid item>
    						<div className={classes.faqWrapper}>
    							<div className={classes.faqTitleWrapper}>
		    						<Typography variant="h4" align="center" color="primary">
		    							I'm new, what should I do?
		    						</Typography>
		    					</div>
	    						<Typography variant="body1" align="center">
	    							We would love to have you at HawkHack! Throughout the event we
				                    will be hosting workshops where you can try new things, start
				                    a project for that idea you always had in mind, and receive
				                    help from industry experts.
	    						</Typography>
	    					</div>
    					</Grid>
    					<Grid item className={classes.bottomItem}>
    						<div className={classes.faqWrapper}>
    							<div className={classes.faqTitleWrapper}>
		    						<Typography variant="h4" align="center" color="primary">
										How much coding experience do I need?
		    						</Typography>
		    					</div>
	    						<Typography variant="body1" align="center">
									Absolutely none. Hackathons are a great place to learn and get
									advice from experienced hackers. We'll also host plenty of
									workshops and have plenty of mentors so by the end of the 24
									hours you'll have a working project even if you haven't coded
									a day in your life before. We also host a prize for best
									beginner hack
	    						</Typography>
	    					</div>
    					</Grid>
    				</Grid>
    			</Grid>	
    			<Grid item xs={12} sm={12} md={6}>
					<Grid
					  container
					  direction="column"
					  justify="center"
					  alignItems="center"
					>
						<Grid item>
							<div className={classes.faqWrapper}>
								<div className={classes.faqTitleWrapper}>
									<Typography variant="h4" align="center" color="primary">
										Who can come?
									</Typography>
								</div>
								<Typography variant="body1" align="center">
									If you're at a current college/university student, a recent
									graduate (up to 1 year), or a high school student, you're more
									than welcome to attend! We are open to students of all
									academic backgrounds and skill levels, so whether you’re an
									aspiring artist or an expert engineer, there’s a place for you
									at HawkHack!
								</Typography>
							</div>
						</Grid>
						<Grid item>
							<div className={classes.faqWrapper}>
								<div className={classes.faqTitleWrapper}>
									<Typography variant="h4" align="center" color="primary">
										Do I need a team?
									</Typography>
								</div>
								<Typography variant="body1" align="center">
									You are welcome to come solo or in a group no more than 4. We
									will provide means for you to find a team if you don’t have
									one
								</Typography>
							</div>
						</Grid>
						<Grid item>
							<div className={classes.faqWrapper}>
								<div className={classes.faqTitleWrapper}>
									<Typography variant="h4" align="center" color="primary">
										What if I can't stay for full 24 hours?
									</Typography>
								</div>
								<Typography variant="body1" align="center">
									That is fine! Although we encourage you to do so and make the
									best of the event, you are free to leave whenever you want and
									come back later
								</Typography>
							</div>
						</Grid>
						<Grid item className={classes.bottomItem}>
							<div className={classes.faqWrapper}>
								<div className={classes.faqTitleWrapper}>
									<Typography variant="h4" align="center" color="primary">
										How much does it cost to attend?
									</Typography>
								</div>
								<Typography variant="body1" align="center">
									FREE, that’s how much. The event is completely FREE to attend.
									FREE food, FREE games, FREE fun. Sounds good, doesn’t it?
								</Typography>
							</div>
						</Grid>
					</Grid>
    			</Grid>
    		</Grid>
	    </div>
    )
}

export default withStyles(faqStyles)(Faq)