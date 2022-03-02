import React, { Component, Fragment } from 'react'
import './style.css'


import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


export default class login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'Megha',
            password: ''
        };
        this.clickSubmit = this.clickSubmit.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);
    }

    clickSubmit(event) {

        event.preventDefault();

        var data = {
            _username: this.state.username,
            _password: this.state.password,
        };
        console.log(data);
        this.verifyLogin(data);
    }

    showSuccess(message) {
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
    }
    showError(message) {
        this.toast.show({ severity: 'error', summary: 'Error Message', detail: message, life: 3000 });
    }

    verifyLogin(data) {
        console.log('In Submit Login');
        var request = new Request('http://localhost:4000/login/api/get_userid', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

        var that = this;
        fetch(request)
            .then(function (response) {
                if (response.status === 400) throw new Error('BAD Request');
                else if (response.status === 405) throw new Error('User not Available in DB');
                else if (response.status === 406) throw new Error('Incorrect Password');
                
                response.json().then(function (data) {
                    localStorage.setItem('username', that.state.username);
                    localStorage.setItem('isLogged', 'true');

                    that.showSuccess('Sucessfully Logged In.');
                    // that.props.history.push('/GS/dashboard');
                });
            })
            .catch(function (err) {
                console.log(err.message);
                that.showError(err.message);
            });
    }





    render() {
        return (
            <Fragment>
                <Toast ref={(el) => this.toast = el} />
                <div id='image_container'></div>
                <div id="login_container">
                    <div className="container_welcome">
                        <p id="welcome">Welcome to</p><p id="welcome2"> Garden Shepherd! </p>
                        <span id="no_account">
                            <a href="register">No account? Sign up </a>
                        </span>
                    </div>
                    <h1 id="sign_in">Sign in </h1>
                    <div className="username">
                        <p id='label_text'>Enter Your username</p>
                        <span className="p-float-label">
                            <InputText id="username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                            <label htmlFor="username">Username</label>
                        </span>
                    </div>
                    <p id='label_text'>Enter Your Password</p>
                    <Password value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} toggleMask />
                    <span id="forgot_password">
                        <a href="/Forgot-Password"> Forgot Password </a>
                    </span>

                    <Button id="button_submit" label="Submit" className="p-button-outlined p-button-success" onClick={this.clickSubmit} />
                </div>
            </Fragment>

        )
    }
}
