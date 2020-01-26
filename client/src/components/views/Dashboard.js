import React, { Fragment, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import dashboardStyles from '../styles/dashboardStyles';
import image from '../styles/pictures/msubackground-1.png';
import classNames from "classnames";

import Hero from "../sections/Hero";
import About from "../sections/About";
import NavBar from "../sections/NavBar";
import Faq from "../sections/Faq";
import Footer from "../sections/Footer";
import Parallax from "../sections/Parallax/Parallax";

const Dashboard = () => {
    const classes = dashboardStyles();

    return (
        <Fragment>
            <CssBaseline />
            <NavBar />
            <Parallax filter image={image}>
                <div className={classes.container}>
                    
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <About />
                    <Faq />
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Dashboard