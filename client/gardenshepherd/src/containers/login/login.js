import React, { Component, Fragment } from 'react'
import './style.css'


import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import Footer from '../../components/Footer/Footer';


export default class login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
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
                    that.props.history.push('/gs/dashboard');
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
                <div className="container">
                    <div className='li_image_container'></div>
                    <div id="login_container">
                        <div className="container_welcome">
                            <p id="welcome">Welcome to</p><p id="welcome2"> Garden Shepherd! </p>
                            <span id="no_account">
                                <a className='l-btn' href="/Register">No account? Sign up </a>
                            </span>
                        </div>
                        <h1 id="sign_in">Sign in </h1>
                        <span className="p-float-label">
                        <p id='label_text'>Enter your Username</p>   
                        <InputText
                            id="form_input"
                            placeholder='Username'
                            value={this.state.username}
                            onChange={(e) => this.setState({ username: e.target.value })}
                            required
                        />
                        </span>
                        <p id='label_text'>Enter Your Password</p>
                        <Password 
                            value={this.state.password}  
                            placeholder='Password'
                            onChange={(e) => this.setState({ password: e.target.value })} 
                            toggleMask 
                            required/>
                        <span id="forgot_password">
                            <a className='l-btn' href="/Forgot-Password"> Forgot Password </a>
                        </span>
                        <Button label="Submit" className="l_button_submit p-button-outlined p-button-success" onClick={this.clickSubmit} />
                    </div>
                </div>
                <Footer />
            </Fragment>

        )
    }
}
