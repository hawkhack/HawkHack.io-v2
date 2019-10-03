import React, { Component } from 'react'
import { Toolbar, AppBar, withStyles, Grid, Typography, Button } from "@material-ui/core"
import navbarStyles from '../styles/navbarStyles';

class NavBar extends Component {

    state = {
        onTop: true
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
                            <Button color="primary">
                                Stay Updated
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(navbarStyles)(NavBar)