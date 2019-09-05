import React from 'react'
import { Grid, Typography, withStyles, Button } from '@material-ui/core'
import heroStyles from '../../styles/heroStyles';

const Hero = ({ ...props }) => {
    const { classes } = props
    return (
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
                    >
                        Get ready for round 2
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="h1"
                        className={classes.heroText}
                    >
                        Hawkhack
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className={classes.buttonGroup}
                        spacing={48}
                    >
                        <Grid item>
                            <Button
                                className={classes.Button}
                                variant="contained"
                                size="large"
                                color="primary"
                            >
                                Register me already
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                className={classes.Button}
                                variant="contained"
                                size="large"
                                color="primary"
                            >
                                Hop in as a sponsor
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(heroStyles)(Hero)