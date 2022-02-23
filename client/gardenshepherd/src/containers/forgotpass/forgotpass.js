import React, { Component, Fragment } from 'react'
import './style.css'


import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import Button from '../../components/Button';


export default class forgotpass extends Component {
    



    render() {
        return (
            <Fragment>
                <div className="image_container"></div>
                <div className="forgotpass_container">
                    <div className="forgot">Forgot Password?</div>
                    <div className="input_container">
                        <label htmlFor="email" className="block">Email</label>
                        <InputText id="email" aria-describedby="email-help" className="block" />
                        <small id="email-help" className="block">Enter your email to get a temporary password.</small>
                        <Button>
                            Submit
                        </Button>
                    </div>

                </div>

            </Fragment>
        )
    }
}