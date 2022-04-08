const { Router } = require('express');
const express = require('express');
const security_router = express.Router();
const pool = require('./connection/connectPSQL')

//http://localhost:4000/checkSecQuestion/api/check_sec
security_router.post('/api/check_sec', function (req, res) {
    var user_data = req.body;
    console.log(user_data)
    var _securityAnswer = user_data._securityAnswer;
    var _username = user_data._username;
    //Validation code

    var sql_query = "SELECT * FROM public.userinfo WHERE user_name='" + _username + "' and security_answer='" + _securityAnswer + "'";
    console.log(sql_query);

    pool.connect((err,db,done)=> {
        if (err) {
            (console.log('Error in Connecting the POOL: ' + err));
            return res.status(400).send(err);
        }
        db.query(sql_query,(err, table)=> {
            done();
            console.log("Here Users: " + table.rowCount);
            if(table.rowCount === 0) {
                return res.status(406).send({msg:"Wrong answer to security question"}); // user not available
            } else {
                return res.status(200).send({text:"Success"});
            }
        })
    });



    
});

module.exports = security_router