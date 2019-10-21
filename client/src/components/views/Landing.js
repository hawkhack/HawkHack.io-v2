import React, { Component, Fragment } from 'react'

import Hero from "../sections/Hero"
import About from "../sections/About"
import NavBar from "../sections/NavBar"
import Faq from "../sections/Faq"
import Footer from "../sections/Footer"
import Schedule from "../sections/Schedule"
import Sponsors from "../sections/Sponsors"

class LandingPage extends Component {

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <NavBar />
                <Hero />
                <About />
                <Sponsors />
                <Faq />
                <Footer />
            </Fragment>
        )
    }
}

export default LandingPage