const mysql = require('Mysql2');

const con = mysql.createConnection({
host: "localhost",
user: "root",
password: "vdreanoivh",
database:"tempus" 
})

module.exports = db;