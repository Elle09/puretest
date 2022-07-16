const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodeproject',
    password: 'Vera2359'
});

module.exports = pool.promise();