const { Router } = require('express');
const express = require('express');
const forgot_router = express.Router();
const pool = require('./connection/connectPSQL')

//http://localhost:4000/forgot/api/check_userid
forgot_router.post('/api/check_userid', function (req, res) {
    //get username data from the frontend
    var user_data = req.body;
    console.log(user_data);
    var _username = user_data._username;

    //query for the database to find users with username.
    var securityQuery = "SELECT * FROM public.userinfo WHERE user_name='" + _username + "'";
    console.log(securityQuery);
    
    //connect to server
    pool.connect((err,db,done)=>{
        //fail
        if (err) {
            (console.log('Error in Connecting the POOL: ' + err));
            return res.status(400).send(err);
        }
        
        //after connection, ask for users with username
        db.query(securityQuery,(err, table) => {
            done();
            console.log("Here Users: " + table.rowCount);
            // No Username found
            if(table.rowCount === 0){
                return res.status(406).send({text:"Username does not match. Please ensure that fields are correct."});
            }
            // A username was found, return security question
            else{
                var question = '';
                table.rows.forEach(row =>{
                    console.log(row.security_question)
                    question = row.security_question
                })
                return res.status(200).send({text:question});
            }
        })
    });


});


module.exports = forgot_router;
