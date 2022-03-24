import React, { Component } from 'react'
import './style.css'

export default class Footer extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //     }
    // }

    render() {
        return (
            <div id="footer">
                <section id="resources">
                    <h2>Resources</h2>
                    <div id="modules">
                        <h2>Resources</h2>
                        {/*<div class="module">
                            <h3>Product</h3>
                            <ul>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Features</a></li>
                                <li><a href="">Documentation</a></li>
                                <li><a href="">Developers</a></li>
                            </ul>
                        </div>*/}
                        <div class="module">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="">Mission</a></li>
                                <li><a href="">History</a></li>
                                <li><a href="">Staff</a></li>
                                <li><a href="">Management</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                        {/*<div class="module">
                            <h3>Contact</h3>
                            <ul>
                                <li class="mail"><a href="">Support</a></li>
                                <li class="phone"><a href="">+0 1 234 567</a></li>
                                <li class="twitter"><a href="">@company</a></li>
                                <li class="facebook"><a href="">Company</a></li>
                            </ul>
                        </div>*/}
                        <div class="module">
                            <h3>Company</h3>
                            <p>Text area used for company description, address and company logo.</p>
                            <ul>
                                <li>Company street 123</li>
                                <li>123 45 City, Country</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div id="signature" aria-hidden="true"></div>
                <footer id="legal">
                    <p>&copy; 3000 by Company. All rights reserved. Please read the <a href="">Privacy Policy</a> and <a href="">Terms of Service</a>.</p>
                </footer>
            </div>
        )
    }

}