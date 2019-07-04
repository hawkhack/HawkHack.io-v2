import React from 'react'
import { withStyles } from '@material-ui/core'
import faqStyles from '../../styles/faqStyles'

const Faq = ({ ...props }) => {
    const { classes } = props
    return (
        <div className={classes.root}>
            OH YEAH
        </div>
    )
}

export default withStyles(faqStyles)(Faq)