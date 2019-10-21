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
                      justify="space-between"
                      alignItems="center"
                    >
                        <Grid item>
                            {this.state.onTop ? 
                                <div></div> 
                            : 
                                <div> 
                                    <Typography
                                        color="secondary"
                                        className={this.state.onTop ? classes.navBarText : classes.navbarScrolled}
                                        variant="h5"
                                    >
                                        Hawkhack
                                   </Typography>
                                </div>
                            }
                        </Grid>
                        <Grid item>
                            <Grid
                              container
                              direction="row"
                              justify="flex-end"
                              alignItems="center"
                            >
                                <Grid item>
                                    <div className={classes.wrapper}>
                                        <NavLink
                                            to="login"
                                            style={{textDecoration: "none"}}
                                        >
                                            <Button variant="outline" color="inherit" className={this.state.onTop ? classes.buttonTop : classes.buttonNotTop}>    
                                                Login 
                                            </Button>
                                        </NavLink>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid> 
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(navbarStyles)(NavBar)