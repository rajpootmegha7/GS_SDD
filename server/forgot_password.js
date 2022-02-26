const { Router } = require('express');
const express = require('express');
const reset_router = express.Router();
const pool = require('./connection/connectPSQL')

reset_router.post('/api/forgot_password', function (req, res) {
    var user_data = req.body;
    console.log(user_data)
    
    var _username = user_data._username;
    var _securityanswer = user_data._securityanswer;
    var _newpassword = user_data._newpassword;

    var security_query = util.format("SELECT * FROM userInfo where user_name=\'%s\' and security_answer=\'%s\'", _username, _securityanswer);


    pool.connect((err,db,done)=>{
        if (err) {
            (console.log('Error in Connecting the POOL: ' + err));
            return res.status(400).send(err);
        }
        db.query(security_query,(err, table) => {

            done();
            console.log("Here Users: " + table.rowCount);
            // No Username and Security Answer Found
            if(table.rowCount === 0){
                return res.status(406).send({text:"Username does not match Security Answer. Please ensure that fields are correct."});
            }
            // Username + Security Answer Correct
            else{
               // var insert_query = util.format('INSERT INTO userInfo (user_name, user_password, email, address, security_answer) VALUES (\'%s\', \'%s\', \'%s\' , \'%s\', \'%s\');', _username, _password, _email, _address, _securityanswer);
               var update_query = util.format('UPDATE userInfo SET user_password = \'%s\' WHERE user_name = \'%s\';', _newpassword, _username);
               db.query(update_query,(err, table) => {});
               return res.status(200).send({text:"Password Successfully Changed"});
                
            }
        })
    });


});


module.exports = reset_router;