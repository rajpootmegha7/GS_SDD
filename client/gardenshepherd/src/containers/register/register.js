import React, { Component, Fragment } from 'react'
import './style.css'
import countryList from 'react-select-country-list'

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';
import Footer from '../../components/Footer/Footer'


// let options = useMemo(() => countryList().getData(), []);

export default class register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            password2: '',
            securityQuestion: '',
            securityAnswer: '',
            country: '',
            selectedCountries: '',

        };
        this.countrylist = [];
        this.questions = [
            { name: 'What is your first school name?', code: 'Q1' },
            { name: 'What is your first pet name?', code: 'Q2' },
            { name: 'What is your favourite dish?', code: 'Q3' },
            { name: 'What is your favourite place?', code: 'Q4' },
            { name: 'What is your favourite color?', code: 'Q5' },
        ]

        this.countryTemplate = this.countryTemplate.bind(this);
        this.onSecurityQuestionChange = this.onSecurityQuestionChange.bind(this);
        this.onclickSubmit = this.onclickSubmit.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);

    }
    countryTemplate(option) {
        return (
            <div className="country-item">
                <div>{option.name}</div>
            </div>
        );
    }
    onSecurityQuestionChange(event) {
        event.preventDefault();
        console.log(event);
        this.setState({ securityQuestion: event.target.value })
        return;

    }
    onclickSubmit(event) {
        event.preventDefault();

        if (!this.state.email) {
            this.showError('Email address is blank');
            return;
        } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
            this.showError('Email address is invalid');
            return;
        }
        if (!this.state.firstname.trim()) {
            this.showError('Firstname is Blank');
            return;
        }
        if (!this.state.lastname.trim()) {
            this.showError('Lastname is Blank');
            return;
        }
        if (!this.state.password) {
            this.showError('Password is required');
            return;
        }
        if (!this.state.password2) {
            this.showError('Confirm Password is required');
            return;
        } else if (this.state.password2 !== this.state.password) {
            this.showError('Passwords do not match');
            return;
        }


        var data = {
            _username: this.state.username,
            _email: this.state.email,
            _firstname: this.state.firstname,
            _lastname: this.state.lastname,
            _password: this.state.password,
            _securityQuestion: this.state.securityQuestion.name,
            _securityCode: this.state.securityQuestion.code,            
            _securityAnswer: this.state.securityAnswer,
            _selectedCountry: this.state.selectedCountries
        };
        console.log(data);
        
        this.verifyRegistration(data);
    }

    verifyRegistration(data) {
        console.log('Verifying user input');
        var request = new Request('http://localhost:4000/register/api/create_userid', {
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
                    that.showSuccess('Successfully registered');
                    that.props.history.push("/Login");
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


    componentDidMount() {

        countryList().getData().forEach(element => {
            var row = { name: element.label, code: element.value }
            this.countrylist.push(row);
        });
    }

    render() {
        return (
            <div>
                <Fragment>
                    <Toast ref={(el) => this.toast = el} />
                    <div className="r_container">
                        <div id="register_container">
                            <div className="container_welcome">
                                <p id="welcome">Register to </p><p id="welcome2"> Garden Shepherd! </p>
                                <span id="no_account">
                                    <a className='l_btn' href='/Login'>Have an account? Sign in </a>
                                </span>
                            </div>
                            <h1 id="sign_up">Sign up </h1>
                            <span className="p-float-label">
                                <InputText
                                    className="form_input"
                                    placeholder='Enter your username'
                                    value={this.state.username}
                                    onChange={(e) => this.setState({ username: e.target.value })}
                                    required
                                />
                            </span>
                            <span className="p-float-label">
                                <InputText
                                    className="form_input"
                                    placeholder='Enter your email address'
                                    value={this.state.email}
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                    required
                                />
                            </span>
                            <div id='formname'>
                                <InputText className="form_input"
                                    placeholder='Firstname'
                                    value={this.state.firstname}
                                    onChange={(e) => this.setState({ firstname: e.target.value })}
                                    required />
                            </div>
                            <div id="formname1">
                                <InputText
                                    id="form_input"
                                    placeholder='Lastname'
                                    value={this.state.lastname}
                                    onChange={(e) => this.setState({ lastname: e.target.value })}
                                    required />
                            </div>
                            <Password
                                value={this.state.password}
                                placeholder='Enter a password'
                                onChange={(e) => this.setState({ password: e.target.value })} toggleMask
                                required
                            />
                            <Password
                                value={this.state.password2}
                                placeholder='Confirm your password'
                                onChange={(e) => this.setState({ password2: e.target.value })} toggleMask
                                required
                            />
                            <Dropdown
                                value={this.state.securityQuestion}
                                placeholder='Choose a security question'
                                options={this.questions}
                                onChange={this.onSecurityQuestionChange} optionLabel="name"
                                required
                            />
                            <InputText className="form_input"
                                placeholder='Your Answer'
                                value={this.state.securityAnswer}
                                onChange={(e) => this.setState({ securityAnswer: e.target.value })} />
                            <Dropdown
                                value={this.state.selectedCountries}
                                placeholder='Country'
                                options={this.countrylist}
                                onChange={(e) => this.setState({ selectedCountries: e.value })} filter optionLabel="name"
                                itemTemplate={this.countryTemplate} style={{ width: '15rem' }} listStyle={{ maxHeight: '230px' }} />
                            <Button id="button_submit_1" label="Submit" className="p-button-outlined p-button-success" onClick={this.onclickSubmit} />
                        </div>
                    </div>
                    <Footer />
                </Fragment>


            </div>
        )
    }
}
