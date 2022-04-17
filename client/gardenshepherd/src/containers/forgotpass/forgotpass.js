import React, { Component, Fragment } from 'react'
import './style.css'

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button';


export default class forgotpass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showUsername: true,
            showUsernameButton: true,
            showSecurity: false ,
            showResetPass: false,
            username: '',
            securityQuestion: 'What is your first pet name?',
            securityAnswer: '',
            pass1: '',
            pass2: ''
        };

        this.clickSubmitUsername = this.clickSubmitUsername.bind(this);
        this.clickSubmitSecurity = this.clickSubmitSecurity.bind(this);
        this.clickSubmitPass = this.clickSubmitPass.bind(this);
    }



    // function called when the user submits their username
    clickSubmitUsername() {
        var data = {
            _username: this.state.username,
        };
        console.log("username is " + this.state.username);
        console.log(data);
        this.verifyUsername(data);
    }


    verifyUsername(data) {
        // here we need to query the backend with the request formed below to ensure the username denotes a valid user
        var request = new Request('http://localhost:4000/forgot_password/api/check_userid', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

        var that = this;
        fetch(request)
            .then(function (response) {
                if (response.status === 400) throw new Error('BAD Request');
                else if (response.status === 406) throw new Error('No user with that username');
                else if (response.status === 404) throw new Error('Not found');
                
                // after querying the backend, we should have gotten a security question, otherwise the errors above would have been triggered
                // with the security question we will now hide the username component and display the security question and answer field
                response.json().then(function (data) {
                    that.setState({securityQuestion: data.text});
                    console.log(that.state.securityQuestion);
                    that.showSuccess('Valid username');
                    that.setState({ showSecurity: true })
                    that.setState({ showUsernameButton: false })
                });
            })
            .catch(function (err) {
                console.log(err.message);
                that.showError(err.message);
            });
    }





    // called when the user clicks the button after entering the answer to their security question
    clickSubmitSecurity() {
        var data = {
            _username: this.state.username,
            _securityAnswer: this.state.securityAnswer
        };
        console.log(data);
        this.verifySecurity(data);
    }



    verifySecurity(data) {
        // verifies the correctness of the user's answer to the security question
        var request = new Request('http://localhost:4000/checkSecQuestion/api/check_sec', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });
        var that = this;
        fetch(request)
            .then(function (response) {
                if (response.status === 400) throw new Error('BAD Request');
                else if (response.status === 406) throw new Error('Wrong answer to security question');
                else if (response.status === 404) throw new Error('Not found');

                // if the validation was a success, then we will toggle the state to show the password fields for the user to reset their password
                response.json().then(function (data) {
                    that.showSuccess('Validation success');
                    that.setState({ showResetPass: true })
                    that.setState({ showUsername: false })
                });
            })
            .catch(function (err) {
                console.log(err.message);
                that.showError(err.message);
            });
        }




    // called when the user clicks the submit button after entering in two paswords
    clickSubmitPass() {
        var data = {
            _username: this.state.username,
            _pass1: this.state.pass1
        };
        console.log(data);

        // this series of statements test that the passwords must match, and that the fields cannot be blank
        if (!this.state.pass1) {
            this.showError('Password field cannot be blank');
            return;
        }
        if (!this.state.pass2) {
            this.showError('Verify password field cannot be blank');
            return;
        } else if (this.state.pass1 !== this.state.pass2) {
            this.showError('Passwords must match');
            return;
        }
        this.updatePass(data);
        
    }

    updatePass(data) {
        // query the backend with the request formed below
        var request = new Request('http://localhost:4000/reset_password/api/reset', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

        var that = this;
        fetch(request)
            .then(function (response) {
                if (response.status === 400) throw new Error('BAD Request');
                else if (response.status === 406) throw new Error('Error changing password');
                else if (response.status === 404) throw new Error('Not found');
                response.json().then(function (data) {
                    // if the password was changed successfully, send the user to the login screen
                    console.log("Success");
                    that.props.history.push("/Login");
                });
        })
        .catch(function (err) {
            console.log(err.message);
            that.showError(err.message);
        });
    }
    


    // popups to display the status of the user's attempts to change their password
    showSuccess(message) {
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
    }
    showError(message) {
        this.toast.show({ severity: 'error', summary: 'Error Message', detail: message, life: 3000 });
    }



    // the only thing to note with this render is the use of elements of the state to display certain things at certain times
    // if showUsername for example is true, we should see a prompt for the users username. If it is false and showResetPass
    // is true, then we should instead see two fields to enter in a new password and match it
    render() {
        return (
            <Fragment>
                <Toast ref={(el) => this.toast = el} />
                <div className="fp_image_container"></div>

                { this.state.showUsername ? <div className="forgotpass_container">
                    <div data-testid="forgot-test" className="forgot">Forgot Password?</div>
                    <div className="input_container">
                        <InputText  data-testid="forgot-2-test" id="username" aria-describedby="username-help"
                                    placeholder='Enter username' value={this.state.username}
                                    onChange={(e) => this.setState({ username: e.target.value })}
                        />
                        { this.state.showUsernameButton ? <div>
                        <div>
                            <Button onClick={this.clickSubmitUsername}>
                                Submit
                            </Button >
                        </div>
                        </div> : null}
                    </div>
                    { this.state.showSecurity ? <div className="security_container" visible="false">
                        <div className="security_question">{this.state.securityQuestion}</div>
                        <InputText  id="username" placeholder='Answer' required
                                    onChange={(e) => this.setState({ securityAnswer: e.target.value })}
                        />
                        <div role="button2">
                            <Button onClick={this.clickSubmitSecurity}>
                                Submit
                            </Button >
                        </div>
                    </div> : null}
                </div> : null}
                { this.state.showResetPass ? <div className="resetpass_container">
                    <div data-testid="reset-test" className="resetpass">Reset Password</div>
                    <div className="input_container">
                        <Password
                            className="f_password"
                            value={this.state.pass1}
                            placeholder='Enter a password'
                            onChange={(e) => this.setState({ pass1: e.target.value })} toggleMask
                            required
                        />
                        <div className="break"></div>
                        <Password
                            className="f_password"
                            value={this.state.pass2}
                            placeholder='Confirm your password'
                            onChange={(e) => this.setState({ pass2: e.target.value })} toggleMask
                            required
                        />
                        <Button onClick={this.clickSubmitPass}>
                            Submit
                        </Button >
                    </div>
                </div> : null}

                <Footer />
            </Fragment>
        )
    }
}