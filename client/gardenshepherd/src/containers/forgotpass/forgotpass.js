import React, { Component, Fragment } from 'react'
import './style.css'


import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';
import Button from '../../components/Button';


export default class forgotpass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showUsername: true,
            showUsernameButton: true,
            showSecurity: false,
            showResetPass: false,
            username: '',
            securityQuestion: '',
            securityAnswer: '',
            pass1: '',
            pass2: ''
        };

        this.clickSubmitUsername = this.clickSubmitUsername.bind(this);
        this.clickSubmitSecurity = this.clickSubmitSecurity.bind(this);
        this.clickSubmitPass = this.clickSubmitPass.bind(this);
    }




    clickSubmitUsername() {
        var data = {
            _username: this.state.username,
        };
        console.log("username is " + this.state.username);
        console.log(data);
        this.verifyUsername(data);
    }


    verifyUsername(data) {
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






    clickSubmitSecurity() {
        var data = {
            _username: this.state.username,
            _securityAnswer: this.state.securityAnswer
        };
        console.log(data);
        this.verifySecurity(data);
    }



    verifySecurity(data) {
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





    clickSubmitPass() {
        var data = {
            _username: this.state.username,
            _pass1: this.state.pass1
        };
        console.log(data);

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
                    console.log("Success");
                });
        })
        .catch(function (err) {
            console.log(err.message);
            that.showError(err.message);
        });
    }
    



    showSuccess(message) {
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
    }
    showError(message) {
        this.toast.show({ severity: 'error', summary: 'Error Message', detail: message, life: 3000 });
    }




    render() {
        return (
            <Fragment>
                <Toast ref={(el) => this.toast = el} />
                <div className="image_container"></div>

                { this.state.showUsername ? <div className="forgotpass_container">
                    <div className="forgot">Forgot Password?</div>
                    <div className="input_container">
                        <label htmlFor="username" className="block">Username</label>
                        <InputText  id="username" aria-describedby="username-help"
                                    onChange={(e) => this.setState({ username: e.target.value })}/>
                        <small id="username-help" className="block">Enter your username above.</small>
                        { this.state.showUsernameButton ? <div>
                            <Button onClick={this.clickSubmitUsername}>
                                Submit
                            </Button >
                        </div> : null}
                    </div>
                    { this.state.showSecurity ? <div className="security_container" visible="false">
                        <label htmlFor="username" className="block">{this.state.securityQuestion}</label>
                        <InputText  id="username" aria-describedby="username-help"
                                    onChange={(e) => this.setState({ securityAnswer: e.target.value })}/>
                        <small id="username-help" className="block">Enter the answer above.</small>
                        <Button onClick={this.clickSubmitSecurity}>
                            Submit
                        </Button >
                    </div> : null}
                </div> : null}
                { this.state.showResetPass ? <div className="resetpass_container">
                    <div className="resetpass">Reset Password</div>
                    <div className="input_container">
                        <label htmlFor="username" className="block">Password</label>
                        <Password
                            value={this.state.pass1}
                            placeholder='Enter a password'
                            onChange={(e) => this.setState({ pass1: e.target.value })} toggleMask
                            required
                        />
                        <label htmlFor="username" className="block">Confirm Password</label>
                        <Password
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

            </Fragment>
        )
    }
}