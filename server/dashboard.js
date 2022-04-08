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

    //  Handles multiple search filters
    var multParameters = false;

    var search_query = "SELECT * FROM plantInfo where "
    //  Name filter, text field that we check with ilike
    if (_plantname) {
        multParameters = true;
        search_query += "PLANT_NAME ilike '%" + _plantname + "%'";
    }

    //  Type filter, dropdown that we check with equality
    if (_planttype) {
        if (multParameters)
            search_query += " AND ";
        multParameters = true;
        search_query += util.format("PLANT_TYPE = \'%s\'", _planttype);
    }

    //  Season filter, dropdown that we check with equality
    if (_plantseason) {
        if (multParameters)
            search_query += " AND ";
        multParameters = true;
        search_query += util.format("season_type_id = \'%s\'", _plantseason);
    }

    //  Location field, Dropdown we check if selected falls within plant's range
    if (_plantlocation) {
        if (multParameters)
            search_query += " AND ";
        search_query += util.format("ZONE_LOWER <= %s and ZONE_UPPER >= %s", _plantlocation, _plantlocation);
    }

    //  Have to add semicolon at end since we don't know what filters will be used
    search_query += ";";
    console.log(search_query);
    pool.connect((err, db, done) => {
        if (err) {
            (console.log('Error in Connecting the POOL: ' + err));
            return res.status(400).send(err);
        }
        console.log(search_query)
        db.query(search_query, (err, table) => {
            done();
            if (table.rows.length === 0)
                return res.sendStatus(403);
            return res.status(200).send({ text: "Search Successful", data: table.rows });
        })
    });


});

module.exports = search_router;