import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default class planner extends Component {
    render() {
        return (
            <div>
                <Header pagename={'planner'}/>
                <Footer />
            </div>
        )
    }
}
