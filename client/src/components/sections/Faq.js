import React from 'react'
import { withStyles } from '@material-ui/core'
import faqStyles from '../styles/faqStyles'

const Faq = ({ ...props }) => {
    const { classes } = props
    return (
        <div className={classes.root}>
           	<iframe 
           		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.438058580651!2d-74.1999974846675!3d40.862259836346404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fe352883ec55%3A0xeece028744cfc9ae!2sMontclair%20State%20University!5e0!3m2!1sen!2sus!4v1568056759036!5m2!1sen!2sus" 
           		width="100%" 
           		height="30%" 
           		frameborder="0" 
           		style={{border: "0"}}
           		allowfullscreen=""></iframe>
        </div>
    )
}

export default withStyles(faqStyles)(Faq)