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
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                    >
                        <Grid item>
                            <Typography
                                color="secondary"
                                className={this.state.onTop ? classes.navBarText : classes.navbarScrolled}
                                variant="h5"
                            >
                                "Logo HERE"
                           </Typography>
                        </Grid>
                        <Grid item>
                            <div className={classes.aboutButton}>
                                <Button variant="outline">    
                                    About 
                                </Button>
                            </div>
                        </Grid>     
                        <Grid item>
                            <div className={classes.wrapper}>
                                <Button variant="outline">    
                                    FAQ 
                                </Button>
                            </div>
                        </Grid> 
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(navbarStyles)(NavBar)