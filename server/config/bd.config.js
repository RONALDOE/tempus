const mysql = require('mysql')
/*Coneccion a mi base de datos local */

const db = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "tempus",
  });


module.exports = db;