const { Router } = require('express');
const express = require('express');
const reset_router = express.Router();
const pool = require('./connection/connectPSQL')

//http://localhost:4000/reset_password/api/reset
reset_router.post('/api/reset', function (req, res) {
    var user_data = req.body;
    console.log(user_data)
    var _username = user_data._username;
    var _password = user_data._pass1;
    //Validation code

    var sql_query = "UPDATE public.userinfo SET user_password='" + _password + "' WHERE user_name='" + _username + "'";
    console.log(sql_query);

    pool.connect((err,db,done)=>{
        if (err) {
            (console.log('Error in Connecting the POOL: ' + err));
            return res.status(400).send(err);
        }
        db.query(sql_query,(err, table) => {
            done();
            if(table.rowCount === 0){
                return res.status(406).send({msg:"Error changing password"}); // user not available
            }
            else{
                return res.status(200).send({text:"Success"});
            }
        })
    });



    
});

module.exports = reset_router