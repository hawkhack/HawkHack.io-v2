import React from 'react'
import { withStyles } from '@material-ui/core'
import footerStyles from '../styles/footerStyles'

const Footer = ({ ...props }) => {
    const { classes } = props
    return (
        <div className={classes.outer}>
        	
        </div>
    )
}

export default withStyles(footerStyles)(Footer)