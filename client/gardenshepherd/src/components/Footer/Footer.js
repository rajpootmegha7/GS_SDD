import React, { Component } from 'react'
import './style.css'

export default class Footer extends Component {

    render() {
        return (
            <div id="footer">
                <section id="resources">
                    <h2>Resources</h2>
                    <div id="modules">
                        <h2>Resources</h2>
                        <div class="module">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="/gs/about-us">Mission</a></li>
                                <li><a href="/gs/about-us">Staff</a></li>
                                <li><a href="/gs/planner">Planner</a></li>
                                <li><a href="/gs/dashboard">Encyclopedia</a></li>
                            </ul>
                        </div>
                        <div class="module">
                            <h3>Garden Shepherd</h3>
                            <p>
                                Here at Garden Shepherd, we pride ourselves in our ability to help anyone with their forays into gardening.
                                Whether its your first time or your fiftieth, our app will provide you with the tools you need to create a garden and mantain it for years!
                            </p>
                            <ul>
                                <li>Contact us!</li>
                                <li>(518) 443-3127</li>
                                <li>GSSupport@gardenshepherd.com</li>
                                <li>110 8th Street</li>
                                <li>Troy, NY 12180</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div id="signature" aria-hidden="true"></div>
                <footer id="legal">
                    <p>&copy; 2022 by Garden Shepherd. All rights reserved.</p>
                </footer>
            </div>
        )
    }

}