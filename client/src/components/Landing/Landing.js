import React, { Component } from 'react'
import Hero from "./sections/Hero";
import About from "./sections/About"

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Hero />
                <About />
            </div>
        )
    }
}

export default LandingPage