import React from "react";
import { withStyles, Paper, Grid } from "@material-ui/core"
import aboutStyles from "../../styles/aboutStyles"

const About = ({ ...props }) => {
    const { classes } = props
    return (
        <Paper className={classes.Home}>
            <Grid container>
                <Grid item xs={12} md={6} className={classes.cardWrapper}>
                    oh yeah
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(aboutStyles)(About)