import React, { Component } from 'react'
import { Toolbar, AppBar, withStyles, Grid, Typography, Button } from "@material-ui/core"
import navbarStyles from '../styles/navbarStyles';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {

    state = {
        onTop: true
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }


    handleScroll = () => {
        if (window.scrollY < 100) {
            this.setState({ onTop: true })
        } else {
            this.setState({ onTop: false })
        }
    }

    handleLogin = () => {

    }

    render() {
        const { classes } = this.props
        return (
            <AppBar color="white" className={this.state.onTop ? classes.color : classes.NotTop}>
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
                        <NavLink to='/login'>
                            <Button color="primary" onClick={this.handleLogin}>
                                Login
                            </Button>
                        </NavLink>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(navbarStyles)(NavBar)