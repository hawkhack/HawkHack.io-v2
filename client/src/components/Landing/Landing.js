import React, { Component } from 'react'
import "../../App.css";

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="title">
                    <h1>HawkHack Fall 2019</h1>
                </div>
                <div className="details">
                    <h3>Coming Soon</h3>
                </div>
                <div className="buttons">
                    <button onclick="location.href='preform.html'" className="button">Pre-Register</button>
                    <button onclick="location.href='sponsorus.html'" className="button">Sponsor Us</button>
                </div>
            </div>
        )
    }
}
