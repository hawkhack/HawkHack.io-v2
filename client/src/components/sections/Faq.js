import React from 'react'
import { withStyles, Grid, Typography } from '@material-ui/core'
import faqStyles from '../styles/faqStyles'

const Faq = ({ ...props }) => {
    const { classes } = props
    return (
        <div className={classes.root}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >   
                <Grid item sm={6}>
                    <Typography
                        variant="body1"
                        align="center"
                        gutterBottom
                        paragraph
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet a neque nec maximus. Quisque nec risus sit amet metus convallis vehicula nec interdum ex. Ut faucibus iaculis ultricies. Etiam scelerisque luctus nulla, vel scelerisque ligula hendrerit non. Nulla facilisi. Etiam non cursus lacus, at molestie tortor. Integer pellentesque est in cursus pharetra. Nullam et commodo nibh, vel condimentum nisi. Ut tincidunt elit non purus tristique congue. Etiam placerat justo felis, sed condimentum nibh blandit et. Sed imperdiet non nunc id pulvinar. Sed tempus porttitor ipsum, vitae sodales tortor vulputate vel. Phasellus tempus, libero ac congue mattis, eros lorem vulputate augue, sit amet facilisis dolor dolor nec felis. Cras placerat leo quis odio iaculis ullamcorper. Nulla con
                    </Typography>
                </Grid>
                <Grid item sm={12}>
                    <div className={classes.iframe} >
                       	<iframe 
                       		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.438058580651!2d-74.1999974846675!3d40.862259836346404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fe352883ec55%3A0xeece028744cfc9ae!2sMontclair%20State%20University!5e0!3m2!1sen!2sus!4v1568056759036!5m2!1sen!2sus" 
                       		frameborder="0" 
                       		style={{border: "0"}}
                       		allowfullscreen=""></iframe>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(faqStyles)(Faq)