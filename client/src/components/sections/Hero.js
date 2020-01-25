import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ScrollDownIndicator } from 'react-landing-page'
import { NavLink } from 'react-router-dom'

import heroStyles from '../styles/heroStyles';

const Hero = () => {
    const classes = heroStyles()
    return (
        <Fragment> 
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.gridContainer}
            >
                <Grid item>
                    <Typography
                        variant="h1"
                        className={classes.heroText}
                        color="secondary"
                        align="center"
                    >
                        HawkHack
                    </Typography>
                </Grid>
                <Grid item>
                    <div className={classes.wrapper}>
                        <Typography
                            variant="h5"
                            color="secondary"
                            align="center"
                            className={classes.round2}
                        >
                            Get ready for round 2
                        </Typography>
                    </div>
                </Grid>
                <Grid item>
                    <Grid container justify="center">
                        <Grid item>
                            <div className={classes.wrapper}>
                                <NavLink
                                    to="register"
                                    className={classes.navLink}
                                >
                                    <Button variant="contained" color="primary" className={classes.Button}>
                                        Mentor
                                    </Button>
                                </NavLink>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className={classes.wrapper}>
                                <NavLink
                                    to="register"
                                    className={classes.navLink}
                                >
                                    <Button variant="contained" color="primary" className={classes.Button}>
                                        Participate
                                    </Button>
                                </NavLink>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className={classes.wrapper}>
                                <NavLink
                                    to="register"
                                    className={classes.navLink}
                                >
                                    <Button variant="contained" color="primary" className={classes.Button}>
                                        Volunteer
                                    </Button>
                                </NavLink>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <ScrollDownIndicator />
        </Fragment>
    )
}

export default Hero