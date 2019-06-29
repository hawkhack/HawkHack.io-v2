import React, { Component } from 'react'
class Hero extends Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-lead-in">Get ready for round 2</div>
                            <div className="intro-heading text-uppercase">HawkHack</div>
                            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger fullButton" href="#services">Register me already</a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Hero