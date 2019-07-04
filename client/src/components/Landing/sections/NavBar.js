import React from 'react'
import { Toolbar, AppBar, withStyles, Grid, Typography, Button } from "@material-ui/core"
import navbarStyles from '../../styles/navbarStyles';

const NavBar = ({ ...props }) => {
    const { classes } = props
    return (
        <div>
            <AppBar color="transparent" className={classes.color} >
                <Toolbar>
                    <Grid
                        container
                        justify="space-around"
                        spacing={24}
                    >
                        <Grid item>
                            <Typography
                                color="inherit"
                                className={classes.navBarText}
                                variant="h6"
                            >
                                "Logo HERE" HawkHack
                           </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.navBarText}>
                                <Button className={classes.Button}>
                                    Checkout HawkHack Spring 2019
                                </Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div >
    )
}

export default withStyles(navbarStyles)(NavBar)