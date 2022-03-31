const { Router } = require('express');
const express = require('express');
const util = require('util');
const register_router = express.Router();
const pool = require('./connection/connectPSQL');

register_router.post('/api/create_userid', function (req, res) {
    
    var user_data = req.body;
    console.log(user_data)

    // User Registration Parameters
    var _username = user_data._username;
    var _email = user_data._email;
    var _firstname = user_data._firstname;
    var _lastname = user_data._lastname;
    var _password = user_data._password;
    var _securityquestion = user_data._securityQuestion;
    var _securityquestioncode = user_data._securityCode;
    var _securityanswer = user_data._securityAnswer;
    var _selectedcountry = user_data._selectedCountry.name;

    // Make sure there is username for sql query
    if(!_username){
        console.log("Username is missing");
        return res.status(406).send({text:"Username is missing"});
    }

    // Initial SQL Query to check if user already exists
    var username_query = util.format("SELECT * FROM userInfo where user_name=\'%s\'", _username);

    pool.connect((err,db,done)=>{
        if (err) {

            (console.log('Error in Connecting the POOL: ' + err));
            return res.status(400).send(err);
        }
        db.query(username_query,(err, table) => {

            done();
            // Bad request (some info is missing)
            if(!_password || !_email || !_firstname || !_lastname 
                || !_securityquestion || !_securityanswer) {
                    console.log("user info missing");
                    return res.status(406).send({text:"User info missing"});
            }
            // User already exists
            else if(table.rowCount > 0){ 
                    console.log("Username is taken");
                    return res.status(406).send({text:"Username is taken"});
            }
            // Username not taken
            else{
                // SQL Query to create new user entry
                var insert_query = util.format('INSERT INTO userInfo (user_name, email,' +
                    'firstname, lastname, user_password, security_question, security_questi' +
                    'on_code , security_answer, country) VALUES (\'%s\', \'%s\', \'%s\', \'%s\',' + 
                    '\'%s\', \'%s\', \'%s\', \'%s\', \'%s\');', _username, _email, _firstname, _lastname
                     , _password, _securityquestion, _securityquestioncode, _securityanswer,_selectedcountry);
                db.query(insert_query,(err, table) => {});
                return res.status(200).send({text:"Profile Successfully Created"});
            }
           
        })
    });


});

module.exports = register_router;