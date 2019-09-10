import React, { Component } from 'react'
import { Grid, Typography, withStyles, Button } from '@material-ui/core'
import heroStyles from '../styles/heroStyles';
import BackgroundSlider from 'react-background-slider'
import image1 from '../styles/pictures/beach.jpg'
import image2 from '../styles/pictures/background1.jpg'

class Hero extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                <BackgroundSlider
                  images={[image1, image2]}
                  duration={2} transition={2} 
                />
                <div id="landing">
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item>
                            <Typography
                                variant="h5"
                                color="primary"
                                align="center"
                            >
                                Get ready for round 2
                            </Typography>
                            <Typography
                                variant="h1"
                                className={classes.heroText}
                                color="secondary"
                                align="center"
                            >
                                HawkHack
                            </Typography>
                        </Grid>
                        <hr />
                        <Grid item>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" className={classes.Button}>
                                        Register me 
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary" className={classes.Button}>
                                        Sponsor me 
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(heroStyles)(Hero)