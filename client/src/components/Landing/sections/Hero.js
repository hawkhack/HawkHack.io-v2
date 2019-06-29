import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div id="hero">
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
