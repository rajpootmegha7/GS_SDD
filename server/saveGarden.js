//Save a garden file

const { Router } = require('express');
const express = require('express');
const Save_router = express.Router();
const pool = require('./connection/connectPSQL')

//http://localhost:4000/login/api/get_userid
Save_router.post('/api/save_gardenLayout', function (req, res) {
    /*
    I'm going out on a limb and assuming we can define req.body however we want
    Assuming this is the case:
        body.layout is a n * m array of integer plant id's
        body.username is the username of the user who's data we're storing
        body.layoutName is the user's defined name of the layout
        body.debug is a boolean that if true will override the sent data with a defualt 24x24 array
    */

    var gardenData = req.body;
    console.log(gardenData);

    //createFilename
    var fileName = gardenData.username + "_" + gardenData.layoutName + ".txt";

    //the 2D array that holds the data to be saved
    var data;
    
    //save generic data if debug, otherwsie send sent data
    if(gardenData.debug){
        data = [
                /* first four rows just to test if it's saving integers properly */
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 1, 2, 3, 4],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 1, 2, 3, 4],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 1, 2, 3, 4],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 1, 2, 3, 4],

                /* second four rows to display empty garden area */
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

                /* third four rows test unusable/reserved area */
                [-1, -2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, 3, 4],
                [-1, -2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, 3, 4],
                [-1, -2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, 3, 4],
                [-1, -2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, 3, 4],

                /* the rest can be overriden with new debug data later */
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4],

                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4],

                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4]
                ];
    }else{
        data = gardenData.layout;
    }

    //generates the data to write to file
    var writeData = data.size + " " + data[].size + " \n"; //  <==== potential debug point, might need to swap data.size and data[].size
    for(var i = 0; i < data.size; i++){
        for(var j = 0; j < date[i].size; j++){
            writeData = writeData + data[i][j] + " ";
        }
        writeData = writeData + '\n';
    }

    console.log("writing the following data to database: ");
    console.log(writeData);

    //write file
    const fs = require('fs');
    fs.writeFile(fileName, writeData, { flag: 'w+' }, err => {
        if (err) {
            (console.log('Error saving file: ' + err));
            return res.status(400).send(err);
        }else{
            console.log("file saved");
            return res.status(200).send({text:"saved :)"});
        }
    });


});