import React, { Component, Fragment } from 'react'
import './style.css'


import { InputText } from 'primereact/inputtext';
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
            username: "",
            securityQuestion: "What was the name of your first pet?",
            securityAnswer: "",
            pass1: "",
            pass2: ""
        };

        this.clickSubmitUsername = this.clickSubmitUsername.bind(this);
        this.clickSubmitSecurity = this.clickSubmitSecurity.bind(this);
    }


/* WHY DOES THIS CAUSE AN ERROR ~~~~~~~~~~ 
    clickSubmit(event) {
        event.preventDefault();
*/
    clickSubmitUsername() {
        var data = {
            _username: this.state.username
        };
        console.log(data);
        this.setState({ showSecurity: true })
        this.setState({ showUsernameButton: false })
        this.verifyUsername(data);
    }


    verifyUsername(data) {
        console.log('In verify');
        var request = new Request('http://localhost:4000/forgot/api/forgot_password', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            //body: JSON.stringify(data)
            body: this.state.username
        });

        var that = this;
        fetch(request)
            .then(function (response) {
                if (response.status === 400) throw new Error('BAD Request');
                else if (response.status === 405) throw new Error('No user with that username');
                else if (response.status === 404) throw new Error('Not found');
                
                response.json().then(function (data) {
                    console.log("in response block");
                    localStorage.setItem('username', that.state.username);
                    that.showSuccess('Sucessfully Logged In.');
                });
                
                console.log("Within the fetch");
//                that.state.securityQuestion --- save value from backend to this
            })
            .catch(function (err) {
                console.log(err.message);
                that.showError(err.message);
            });
    }






    clickSubmitSecurity() {
        var data = {
            _securityAnswer: this.state.securityAnswer
        };
        console.log(data);
        
        this.verifyUsername(data);
    }














    
    showSuccess(message) {
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
    }
    showError(message) {
        this.toast.show({ severity: 'error', summary: 'Error Message', detail: message, life: 3000 });
    }


    // generatePass() {
    //     var randomPass = Math.random().toString(36).substr(2, 8);
    //     this.pass = randomPass;
    // }


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
                <div className="resetpass_container">


                </div>

            </Fragment>
        )
    }
}