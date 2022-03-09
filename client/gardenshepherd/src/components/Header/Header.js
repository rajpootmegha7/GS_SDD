import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import logo_refernce from '../../images/Logo.png'

import './style.css'

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeLink : this.props.pagename,
        }
    }
    componentDidMount(){
        if(this.state.activeLink === 'dashboard'){
            let el = document.getElementById('0-btn')
            el.style.borderBottom = '1px solid green'
            el.style.color = 'green'
            el.style.height = 'inherit'
        }
        else if(this.state.activeLink === 'planner'){
            let el = document.getElementById('1-btn')
            el.style.borderBottom = '1px solid green'
            el.style.color = 'green'
            el.style.height = 'inherit'
        }
        else if(this.state.activeLink === 'about'){
            let el = document.getElementById('2-btn')
            el.style.borderBottom = '1px solid green'
            el.style.color = 'green'
            el.style.height = 'inherit'
        }
    }
    
    render() {
        return (
            <div className='header-cont'>
                <div className='logo'><img src={logo_refernce} alt="Girl in a jacket" width="150" height="150" /></div>
                <div className='menu-cont'>
                    <Link id='0-btn' to='/gs/dashboard'>Plant Enclyopedia</Link>
                    <Link id='1-btn' to='/gs/planner' >Planner</Link>
                    <Link id='2-btn' to='/gs/dashboard'> About us</Link>
                    <Link to='logout'>Logout</Link>
                </div>
                
            </div>
        )
    }
}

