import React from "react";
import { withStyles, Paper } from "@material-ui/core"
import aboutStyles from "../../styles/aboutStyles"

const About = ({ ...props }) => {
    const { classes } = props
    return (
        <Paper className={classes.Home}>
            OH EYAH
        </Paper>
    )
}

export default withStyles(aboutStyles)(About)