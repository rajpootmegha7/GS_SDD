const { Router } = require('express');
const express = require('express');
const login_router = express.Router();
const pool = require('./connection/connectPSQL')

//http://localhost:4000/login/api/get_userid
login_router.post('/api/get_userid', function (req, res) {
    var user_data = req.body;
    console.log(user_data);
    var _username = user_data._username;
    var _password = user_data._password;
    //Validation code

    // selects a user from the database based on username
    var sqlQuery = "SELECT * FROM public.userinfo where user_name='" + _username + "'";
    console.log(sqlQuery);

    pool.connect((err,db,done)=> {
        if (err) {
            (console.log('Error in Connecting the POOL: ' + err));
            return res.status(400).send(err);
        }
        db.query(sqlQuery,(err, table) => {
            done();
            console.log("Here Users: " + table.rowCount);
            // User doesn't exist in database
            if(table.rowCount == 0) {
                return res.status(405).send({msg:"User not Available in DB"});
            }
            // User does exist
            else{
                var backend_pass = '';
                table.rows.forEach(row=> {
                    console.log(row.user_password)
                    backend_pass = row.user_password;
                })

                if(_password !== backend_pass)
                    return res.status(406).send({text:"Incorrect Password"});
                else
                    return res.status(200).send({text:"Successfully Verified"});
            }
        })
    });
    
});

module.exports = login_router