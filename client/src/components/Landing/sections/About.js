import React from "react";
import { withStyles } from "@material-ui/core"
import aboutStyles from "../../styles/aboutStyles"

const About = ({ ...props }) => {
    const { classes } = props
    return (
        <div className={classes.Section}>
            OH EYAH
        </div>
    )
}

export default withStyles(aboutStyles)(About)