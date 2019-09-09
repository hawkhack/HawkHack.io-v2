import React from "react";
import { withStyles, Paper, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core"
import aboutStyles from "../styles/aboutStyles"

const About = ({ ...props }) => {
    const { classes } = props
    return (
        <Paper className={classes.home}>
            <Grid 
                container 
                direction="column" 
                justify="center" 
                alignItems="center"
            >
                <Grid item xs={12} sm={12} md={6}>
                    Insert picture
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        paragraph
                    >
                       1
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(aboutStyles)(About)