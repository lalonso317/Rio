const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password:'',
    database: 'slack',
    host: 'localhost'
})

module.exports = pool  