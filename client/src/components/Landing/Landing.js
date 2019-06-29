import React, { Component } from 'react'
import Hero from "./sections/Hero";
import Navbar from "./sections/NavBar"

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Hero />
            </div>
        )
    }
}

export default LandingPage