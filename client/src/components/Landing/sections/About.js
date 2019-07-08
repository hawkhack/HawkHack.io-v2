import React from "react";
import { withStyles, Paper, Grid, Button, Typography, TextField, Hidden } from "@material-ui/core"
import aboutStyles from "../../styles/aboutStyles"

const About = ({ ...props }) => {
    const { classes } = props
    return (
        <Paper className={classes.Home}>
            <Grid container>
                <Grid item xs={12} md={6} className={classes.cardWrapper}>
                    <div className={classes.card}>
                        <form className={classes.cardContent}>
                            <Typography variant="h2" component="h2" gutterBottom>
                                Receive offers
                            </Typography>
                            <Typography variant="h5">
                                Taste the holidays of the everyday close to home.
                            </Typography>
                            <TextField noBorder className={classes.textField} placeholder="Your email" />
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                className={classes.button}
                            >
                                Keep me updated
                            </Button>
                        </form>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className={classes.imagesWrapper}>
                    <Hidden smDown>
                        <div className={classes.imageDots} />
                        <img
                            src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
                            alt="call to action"
                            className={classes.image}
                        />
                    </Hidden>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(aboutStyles)(About)