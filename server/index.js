// server/index.js


const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const login_router = require('./login');
const register_router = require('./register');
const forgot_router = require('./forgot_password');
const security_router = require('./checkSecQuestion');
const reset_router = require('./reset_password');
const dashboard_router = require('./dashboard');
const planner_router = require('./planner');

const PORT = 4000;               // LOCAL PORT DEFINITIONS where the backend will be hosted..............

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
app.use(cors());


app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  const database = require('./connection/connectPSQL');

;(async function() {
    app.listen(PORT);
    console.log('Listening to the PORT: '+ PORT);
    const client = await database.connect();
})()

//Internal Endpoint defination modules

app.use('/login', login_router); //Login services 
app.use('/register', register_router); // Register services
app.use('/forgot_password', forgot_router);
app.use('/checkSecQuestion', security_router);
app.use('/reset_password', reset_router);
app.use('/dashboard',dashboard_router);
app.use('/planner',planner_router);