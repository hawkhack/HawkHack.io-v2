import React, { Component } from 'react'
import { Grid, Typography, withStyles, Button } from '@material-ui/core'
import heroStyles from '../styles/heroStyles';
import { ScrollDownIndicator } from 'react-landing-page'
import video from '../styles/pictures/Hawkhack.mp4'

class Hero extends Component {
    render() {
        const { classes } = this.props
    
        return (
            <div> 
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
                            Get ready for round 2, baby
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
                <ScrollDownIndicator />
            </div>
        )
    }
}

export default withStyles(heroStyles)(Hero)