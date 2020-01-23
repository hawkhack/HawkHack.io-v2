import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ScrollDownIndicator } from 'react-landing-page'
import { NavLink } from 'react-router-dom'

import heroStyles from '../styles/heroStyles';

const Hero = () => {
    const classes = heroStyles()
    return (
        <div className={classes.image}>
            <div className={classes.grad}> 
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: '100vh' }}
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
                                color="primary"
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
                                        style={{textDecoration: "none"}}
                                    >
                                        <Button variant="contained" color="primary" className={classes.Button}>
                                            Register 
                                        </Button>
                                    </NavLink>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <ScrollDownIndicator />
            </div>
        </div>
    )
}

export default Hero