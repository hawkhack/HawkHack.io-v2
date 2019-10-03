import React, { Component, Fragment } from 'react'
import Hero from "../sections/Hero"
import About from "../sections/About"
import NavBar from "../sections/NavBar"
import Faq from "../sections/Faq"
import Footer from "../sections/Footer"
import Sponsors from "../sections/Sponsors"
import BackgroundSlider from 'react-background-slider'
import image1 from '../styles/pictures/beach.jpg'
import image2 from '../styles/pictures/background1.jpg'

class LandingPage extends Component {

    render() {
        return (
            <Fragment>
                <BackgroundSlider 
                    images={[image1, image2]}
                    duration={1} transition={2} 
                />
                <NavBar/>
                <Hero />
                <Sponsors />
                <About />
            </Fragment>
        )
    }
}

export default LandingPage