import React, { Component, Fragment } from 'react'
import './style.css'


import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import Button from '../../components/Button';


export default class forgotpass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayBasic: false,
            position: "center",
            email: "",
            pass: ""
        };

        this.clickSubmit = this.clickSubmit.bind(this);
        this.onShow = this.onShow.bind(this)
        this.onHide = this.onHide.bind(this);
    }


/* WHY DOES THIS CAUSE AN ERROR ~~~~~~~~~~ 
    clickSubmit(event) {
        event.preventDefault();
*/
    clickSubmit() {
        var data = {
            _email: this.state.email
        };
        console.log(data);
        
        this.verifyEmail(data);
    }


    verifyEmail(data) {
        console.log('In verify');
        /* WHY IS IT NOT GETTING INTO THE CORRECT API ? 
        ALSO, WHY DOES THE ROUTER IN INDEX LOOK DIFFERENT?*/
        var request = new Request('http://localhost:4000/forgot/api/forgot_password', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            //body: JSON.stringify(data)
            body: this.state.email
        });

        var that = this;
        fetch(request)
            .then(function (response) {
                if (response.status === 400) throw new Error('BAD Request');
                else if (response.status === 405) throw new Error('No user with that email');
                else if (response.status === 404) throw new Error('Not found');
                
                response.json().then(function (data) {
                    console.log("in response block");
                    localStorage.setItem('email', that.state.email);

                    that.showSuccess('Sucessfully Logged In.');
                });
                
                console.log("Within the fetch");
                that.generatePass();
                that.onShow("displayBasic");
                /* response should be making dialogue box visible and displaying password*/
            })
            .catch(function (err) {
                console.log("Error: " + err.message);
                that.showError(err.message);
            });
    }


    
    showSuccess(message) {
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
    }
    showError(message) {
        console.log("Message " + message);
        this.toast.show({ severity: 'error', summary: 'Error Message', detail: message, life: 3000 });
    }







    onShow(name, position) {
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

    generatePass() {
        var randomPass = Math.random().toString(36).substr(2, 8);
        this.pass = randomPass;
    }

    render() {
        return (
            <Fragment>
                <div className="image_container"></div>
                <div className="forgotpass_container">
                    <div className="forgot">Forgot Password?</div>
                    <div className="input_container">
                        <label htmlFor="email" className="block">Email</label>
                        <InputText  id="email" aria-describedby="email-help" className="block" 
                                    onChange={(e) => this.setState({ email: e.target.value })}/>
                        <small id="email-help" className="block">Enter your email to get a temporary password.</small>
                        <Button onClick={this.clickSubmit}>
                            Submit
                        </Button >
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