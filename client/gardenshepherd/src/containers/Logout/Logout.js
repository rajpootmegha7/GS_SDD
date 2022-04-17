import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.css'
import Button from '../../components/Button'
import Footer from '../../components/Footer/Footer';
// class component for logout functionality.
export default class logout extends Component {
  componentDidMount() {
    localStorage.clear('username');
    localStorage.setItem('isLogged', false);
  }
  render() {
    return (
      <div>
        <div className='logoff_container'>
          <p data-testid="signout-test">Successfully Logged Out</p>
          <Button data-testid="button-test" className='login_btn'>
            <Link className='planner-link' to={{
              pathname: '/Login',
            }}>Login
            </Link>
          </Button>

        </div>
        <Footer />

      </div>

    )
  }
}
