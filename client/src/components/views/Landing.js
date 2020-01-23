import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import landingPageStyles from '../styles/landingPageStyles';

import Hero from "../sections/Hero";
import About from "../sections/About";
import NavBar from "../sections/NavBar";
import Faq from "../sections/Faq";
import Footer from "../sections/Footer";
import Schedule from "../sections/Schedule";
import Sponsors from "../sections/Sponsors";

const LandingPage = () => {
    const classes = landingPageStyles();
    return (
        <Fragment>
            <CssBaseline />
            <NavBar />
            <Hero />
            <About />
            <hr className={classes.hr} />
            <Faq />
            <Footer />
        </Fragment>
    )
}

export default LandingPage