import React, { Component } from 'react'
import { Grid, Typography, withStyles, Button } from '@material-ui/core'
import heroStyles from '../styles/heroStyles';
import { ScrollDownIndicator } from 'react-landing-page'

import { NavLink } from 'react-router-dom'

class Hero extends Component {
    render() {
        const { classes } = this.props
    
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
                                    Get ready for round 2, baby
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
}

export default withStyles(heroStyles)(Hero)