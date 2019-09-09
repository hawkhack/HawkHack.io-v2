import React, { Component } from 'react'
import { Toolbar, AppBar, withStyles, Grid, Typography, Button } from "@material-ui/core"
import navbarStyles from '../styles/navbarStyles';

class NavBar extends Component {

    render() {
        const { classes } = this.props
        return (
            <div>
                <AppBar color="white" className={classes.NotTop} >
                    <Toolbar>
                        <Grid
                            container
                            justify="space-between"
                            spacing={24}
                        >
                            <Grid item>
                                <Typography
                                    color="inherit"
                                    className={classes.navBarText}
                                    variant="h6"
                                >
                                    "Logo HERE"
                               </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.navBarText}>
                                    <Button
                                        className={classes.Button}
                                    >
                                        Sign in
                                    </Button>
                                    <Button
                                        className={classes.Button}
                                    >
                                        Register
                                    </Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div >
        )
    }
}

export default withStyles(navbarStyles)(NavBar)