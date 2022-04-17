import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import logo_refernce from '../../images/logo2.png'
import './style.css'

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeLink : this.props.pagename,
        }
    }

    // this functions allows each of the links of the header to be clicked 
    // when not on that part of the page and changes their color
    componentDidMount() {
        if(this.state.activeLink === 'dashboard'){
            let el = document.getElementById('0_btn')
            el.style.borderBottom = '1px solid green'
            el.style.color = 'green'
            el.style.height = 'inherit'
        }
        else if(this.state.activeLink === 'planner'){
            let el = document.getElementById('1_btn')
            el.style.borderBottom = '1px solid green'
            el.style.color = 'green'
            el.style.height = 'inherit'
        }
        else if(this.state.activeLink === 'about'){
            let el = document.getElementById('2_btn')
            el.style.borderBottom = '1px solid green'
            el.style.color = 'green'
            el.style.height = 'inherit'
        }
    }
    
    render() {
        return (
            <div className='header_cont'>
                <div data-testid="header-test" className='logo'><img src={logo_refernce} alt="GS Logo" width="150" height="70px" /></div>
                <div className='menu_cont'>
                    <Link id='0_btn' to='/gs/dashboard'>Plant Enclyopedia</Link>
                    <Link id='1_btn' to='/gs/planner' >Planner</Link>
                    <Link id='2_btn' to='/gs/about-us'>About us</Link>
                    <Link to='Logout'>Logout</Link>
                </div>
                
            </div>
        )
    }
}

