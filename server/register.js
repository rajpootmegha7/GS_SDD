const { Router } = require('express');
const express = require('express');
const register_router = express.Router();
const pool = require('./connection/connectPSQL')

register_router.post('/api/create_userid', function (req, res) {
    var user_data = req.body;
    console.log(user_data)
    
    var _firstname = user_data._firstname;
    var _lastname = user_data._lastname;
    var _password = user_data._password;
    var _email = user_data._email;
    var _country = user_data._address;
    var _questioncode =user_data._questioncode;
    var _securityanswer = user_data._securityanswer;

    var username_query = util.format("SELECT * FROM userInfo where user_name=\'%s\'", _username);

    pool.connect((err,db,done)=>{
        if (err) {

            (console.log('Error in Connecting the POOL: ' + err));
            return res.status(400).send(err);
        }
        db.query(username_query,(err, table) => {

            done();
            console.log("Here Users: " + table.rowCount);
            // Username not taken
            if(table.rowCount === 0){

                var insert_query = util.format('INSERT INTO userInfo (user_name, user_password, email, address, security_answer) VALUES (\'%s\', \'%s\', \'%s\' , \'%s\', \'%s\');', _username, _password, _email, _address, _securityanswer);
                db.query(insert_query,(err, table) => {});
                return res.status(200).send({text:"Profile Successfully Created"});
            }
            // Username taken
            else{
                return res.status(406).send({text:"Username is taken"});
            }
        })
    });


});

module.exports = register_router;