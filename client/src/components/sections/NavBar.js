import React, { Component } from 'react'
import { Toolbar, AppBar, withStyles, Grid, Typography, Button, Grow } from "@material-ui/core"
import navbarStyles from '../styles/navbarStyles';

class NavBar extends Component {

    state = {
        onTop: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY < 100) {
            this.setState({ onTop: true })
        } else {
            this.setState({ onTop: false })
        }
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <AppBar color="white" className={this.state.onTop ? classes.color : classes.NotTop } >
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