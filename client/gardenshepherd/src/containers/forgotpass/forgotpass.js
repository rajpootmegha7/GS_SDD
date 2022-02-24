import React, { Component, Fragment } from 'react'
import './style.css'


import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import Button from '../../components/Button';


export default class forgotpass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayBasic: false,
            position: "center",
            pass: ""
        };

        this.onClick = this.onClick.bind(this)
        this.onHide = this.onHide.bind(this);
    }

    onClick(name, position) {
        let state = {
            [`${name}`]: true
        };
        if (position) {
            state = {
                ...state,
                position
            };
        }
        this.setState(state);
    }


    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
    }



    clickHandler() {
        console.log('Button clicked');
    }

    generatePass() {
        var randomPass = Math.random().toString(36).substr(2, 8);
        this.pass = randomPass;
    }

    functionCaller() {
        /*  change this function to query backend; it will 
            check that the email in the box is valid
            (later) ask for security questions
            (later) generate the password
        */
        this.generatePass();
        this.onClick("displayBasic");
    }

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
                        <Button onClick={() => this.functionCaller()}>
                            Submit
                        </Button>
                    </div>
                    <Dialog
                        header="Hello" /*heading of popup*/
                        visible={this.state.displayBasic}
                        style={{ width: "50vw" }}
                        onHide={() => this.onHide("displayBasic")}
                    >
                        <div className="dialog-div">
                            Your temporary password is below. It will expire in 15 minutes.
                            <div className="display-pass">
                                {this.pass}
                            </div>
                        </div>
                    </Dialog>

                </div>

            </Fragment>
        )
    }
}