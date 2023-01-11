const mysql = require('mysql2')
/*Coneccion a mi base de datos local */

const db = mysql.createConnection({
    host: "localhost",
    user: "remote",
    password: "1234",
    database: "tempus",
  });


module.exports = db;