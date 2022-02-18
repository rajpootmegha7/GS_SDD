// Function/Module Description: Connection to Postgres DB with URI

const {Pool} = require('pg')

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'MSR2021jan@',
    max:20,
    database:'garden',
    idleTimeoutMillis:30000,
    connectionTimeoutMillis: 2000
})

module.exports = pool