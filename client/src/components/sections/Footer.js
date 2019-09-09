import React from 'react'
import { withStyles } from '@material-ui/core'
import footerStyles from '../styles/footerStyles'

const Footer = ({ ...props }) => {
    const { classes } = props
    return (
        <div className={classes.root}>
            Oh yeah
        </div>
    )
}

export default withStyles(footerStyles)(Footer)