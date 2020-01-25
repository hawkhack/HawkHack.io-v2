import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import landingPageStyles from '../styles/landingPageStyles';
import image from '../styles/pictures/msubackground-1.png';
import classNames from "classnames";

import Hero from "../sections/Hero";
import About from "../sections/About";
import NavBar from "../sections/NavBar";
import Faq from "../sections/Faq";
import Footer from "../sections/Footer";
import Schedule from "../sections/Schedule";
import Sponsors from "../sections/Sponsors";
import Parallax from "../sections/Parallax/Parallax";

const LandingPage = () => {
    const classes = landingPageStyles();

    return (
        <Fragment>
            <CssBaseline />
            <NavBar />
            <Parallax filter image={image}>
                <div className={classes.container}>
                    <Hero />
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <About />
                    <hr className={classes.hr} />
                    <Faq />
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default LandingPage