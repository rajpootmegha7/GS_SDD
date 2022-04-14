const { Router } = require('express');
const express = require('express');
const planner_router = express.Router();
const pool = require('./connection/connectPSQL')
const util = require('util');

//http://localhost:4000/planner/api/save_planner
planner_router.post('/api/save_planner', function (req, res) {
    var user_data = req.body;
    console.log(user_data);
    var _username = user_data.user_name;
    var _data = user_data.data;
    console.log(_username)
    //Validation code

    var insert_query = util.format('INSERT INTO public.planner (username, plannerdata) VALUES (\'%s\', \'%s\') ON CONFLICT (username) DO UPDATE SET plannerdata = Excluded.plannerdata;', _username, _data);
    console.log(insert_query);

    pool.connect((err,db,done)=> {
        if (err) {
            (console.log('Error in Connecting the POOL: ' + err));
            return res.status(400).send(err);
        }
        db.query(insert_query,(err) => {
            done();
            if (err) {
                (console.log('Error in pushing data: ' + err));
                return res.status(400).send(err);
            }
            return res.status(200).send({res: 'OK Saved'});
        })
    });
    
});


planner_router.post('/api/get_planner',function(req,res){
    console.log('/api/get_planner')
    var username = req.body.username
    var sql_query = "select plannerdata from public.planner where username = '" + username + "'"

    console.log(sql_query);

    pool.connect((err,db,done)=>{
        if(err){
            console.log('Error in Connecting the POOL: ' + err);
            return res.status(400).send(err);
        }
        else{
            db.query(sql_query, (err, table) => {
                done();
                if(err){
                    (console.log('Error in SQL query: ' + err));
                    return res.status(400).send(err);
                }
                else{
                    res.status(200).send({data: table.rows});
                }
            })
        }
    }) 
})

module.exports = planner_router