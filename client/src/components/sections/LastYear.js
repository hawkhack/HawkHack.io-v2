import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import lastYearStyles from "../styles/lastYearStyles";
import peopleIcon from '../styles/pictures/peopleIcon.png';
import moneyIcon from '../styles/pictures/moneyIcon.png';
import gameIcon from '../styles/pictures/gameIcon.png';
import image from '../styles/pictures/msulanding.jpg';

const LastYear = () => {
	const classes = lastYearStyles();

	return (
		<Fragment>
			<Grid 
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				<Grid item>
					<div className={classes.wrapper}>
						<Typography
							variant="h2"
							color="primary"
						>
							Check out last year
						</Typography>
					</div>
				</Grid>
			</Grid>
			<div className={classes.section}>
				<div className={classes.container}>
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
								<Grid item xs={12} sm={12} md={12} lg={3}>
									<div className={classes.imgWrapper}>
										<img src={image} className={classes.img} alt="a pic" />
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3}>
									<div className={classes.imgWrapper}>
										<img src={image} className={classes.img} alt="a pic" />
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3}>
									<div className={classes.imgWrapper}>
										<img src={image} className={classes.img} alt="a pic" />
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3}>
									<div className={classes.imgWrapper}>
										<img src={image} className={classes.img} alt="a pic" />
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
								<Grid item xs={12} sm={12} md={12} lg={3}>
									<div className={classes.imgWrapper}>
										<img src={image} className={classes.img} alt="a pic" />
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3}>
									<div className={classes.imgWrapper}>
										<img src={image} className={classes.img} alt="a pic" />
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3}>
									<div className={classes.imgWrapper}>
										<img src={image} className={classes.img} alt="a pic" />
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3}>
									<div className={classes.imgWrapper}>
										<img src={image} className={classes.img} alt="a pic" />
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
								<Grid item xs={12} sm={12} md={12} lg={3}>
									<div className={classes.imgWrapper}>
										<img src={image} className={classes.img} alt="a pic" />
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3}>
									<div className={classes.imgWrapper}>
										<img src={image} className={classes.img} alt="a pic" />
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3}>
									<div className={classes.imgWrapper}>
										<img src={image} className={classes.img} alt="a pic" />
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3}>
									<div className={classes.imgWrapper}>
										<img src={image} className={classes.img} alt="a pic" />
									</div>
								</Grid>
							</Grid>
						</Grid> 
					</Grid>
				</div>
			</div>
			<br />
			<br />
			<br />
			<Grid
	            container
	            direction="row"
	            justify="center"
	            alignItems="center"
	        >
	            <Grid item xs={12} sm={12} md={3}>
	                <Grid
	                  container
	                  direction="column"
	                  justify="center"
	                  alignItems="center"
	                >
	                    <Grid item>
	                         <img alt="icons" src={peopleIcon} width="100px" height="auto" />
	                    </Grid>
	                    <Grid item>
	                        <Typography 
	                            variant="h5"
	                            align="center"
	                            style={{ width: "200px" }}
	                            gutterBottom
	                            className={classes.whatText}
	                        >
	                            First Hackathon at MSU with over 150+ attendees
	                        </Typography>
	                    </Grid>
	                </Grid>
	            </Grid>
	            <Grid item xs={12} sm={12} md={3}>
	                <Grid
	                  container
	                  direction="column"
	                  justify="center"
	                  alignItems="center"
	                >
	                    <Grid item>
	                        <img alt="icons" src={moneyIcon} width="100px" height="auto" />
	                    </Grid>
	                    <Grid item>
	                        <Typography 
	                            variant="h5"
	                            align="center"
	                            style={{ width: "200px" }}
	                            gutterBottom
	                            className={classes.whatText}
	                        >
	                            $15,000+ in sponsorships and $1000+ in prizes 
	                        </Typography>
	                    </Grid>
	                </Grid>
	            </Grid>
	            <Grid item xs={12} sm={12} md={3}>
	                <Grid
	                    container
	                    direction="column"
	                    justify="center"
	                    alignItems="center"
	                >
	                    <Grid item>
	                        <img alt="icons" src={gameIcon} width="100px" height="auto" />
	                    </Grid>
	                    <Grid item>
	                        <Typography 
	                            variant="h5"
	                            align="center"
	                            style={{ width: "200px" }}
	                            gutterBottom
	                            className={classes.whatText}
	                        >
	                            Lasertag and Smash tournament certified, sponsored 
	                        </Typography>
	                    </Grid>
	                </Grid>
	            </Grid>
	        </Grid>
	        <br />
	        <br />
	        <br />
	    </Fragment>
	)
}

export default LastYear;