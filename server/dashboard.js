const { Router } = require('express');
 const express = require('express');
 const util = require('util');
 const search_router = express.Router();
 const pool = require('./connection/connectPSQL');

 search_router.post('/api/search_plant', function (req, res) {

     var search_data = req.body;

     var _plantname = search_data._plantname;
     var _planttype = search_data._planttype;
     var _plantseason = search_data._plantseason;
     var _plantlocation = search_data._plantlocation;

     var multparameters = false;

     var search_query = "SELECT * FROM plantInfo where "
     if(_plantname){
         multparameters = true;
         search_query += "PLANT_NAME ilike '%"+ _plantname + "%'";
     }

     if(_planttype){
         if(multparameters)
             search_query += " AND ";
         multparameters = true;
         search_query += util.format("PLANT_TYPE = \'%s\'", _planttype);
     }

     if(_plantseason){
         if(multparameters)
             search_query += " AND ";
         multparameters = true;
         search_query += util.format("season_type_id = \'%s\'", _plantseason);
     }

     if(_plantlocation){
         if(multparameters)
             search_query += " AND ";
         search_query += util.format("ZONE_LOWER <= %s and ZONE_UPPER >= %s", _plantlocation, _plantlocation);
     }

     search_query += ";";
     console.log(search_query);

     pool.connect((err,db,done)=>{
         if (err) {

             (console.log('Error in Connecting the POOL: ' + err));
             return res.status(400).send(err);
         }
         console.log(search_query)
         db.query(search_query,(err, table) => {
             // console.log(err)
             done();
             
             if(table.rows.length === 0) return res.sendStatus(403);
             return res.status(200).send({text:"Search Successful", data:table.rows});

         })
     });


 });

 module.exports = search_router;