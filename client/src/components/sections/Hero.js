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
            >
                <Grid item xs={12}>
                    <Typography
                        variant="h1"
                        className={classes.heroText}
                        color="secondary"
                        align="center"
                    >
                        HawkHack
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.wrapper}>
                        <Typography
                            variant="h5"
                            color="secondary"
                            align="center"
                            className={classes.round2}
                        >
                            Montclair State's second annual 24-hour hackathon
                        </Typography>
                        <Typography
                            variant="h5"
                            color="secondary"
                            align="center"
                            className={classes.dates}
                        >
                            March 29th - 31st or something
                        </Typography>
                    </div>
                </Grid>
                <Grid item>
                    <Grid 
                        container 
                        direction="row"
                        alignItems="center"
                        justify="center"
                    >
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