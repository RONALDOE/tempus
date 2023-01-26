const express = require('express');
const router = express.Router();
const db = require('../config/bd.config')
router.use(express.json())

router.get("/", (req, res) => {
    db.query("SELECT * FROM Employees", (error, results) => {
      if (error) return res.json(error);
  
      return res.json(results);
    });
  });
  
  router.get("/:id", (req, res) => {
    const id = req.params.id;
  
    db.query("SELECT * FROM Employees WHERE _idEmployee = ?", id, (error, results) => {
        if (error) return res.json(error);
  
      return res.json(results[0]);
    });
  });
  
  router.post("/", (req, res) => {
    const values = [
      req.body._name,
      req.body._lastName,
      req.body._idNumber,
      req.body._cellphone,
      req.body._email
    ];
    const query = `SELECT * FROM Employees WHERE _idNumber = ? OR _email = ?`;
    db.query(query, [values._idNumber, values._email], (error, results) => {
      if (error) {
        // Si hay un error al ejecutar la consulta, devolver un código de estado 500 (Internal Server Error)
        return res.status(500).send("Error al verificar si el empleado ya existe");
      }
      if (results.length > 0) {
        // Si la consulta devuelve resultados, significa que el empleado ya existe
        return res.status(400).send("El empleado ya existe");
      }})
  
    db.query("INSERT INTO Employees(_name, _lastName, _idNumber, _cellphone, _email) VALUES (?)", [values], (error, results) => {
        if (error) return res.json(error);
  
      return res.json(results);
    });
  });
  
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const values = [
      req.body._name,
      req.body._lastName,
      parseInt(req.body._idNumber,10),
      req.body._cellphone,
      req.body._email
    ];
  
    db.query("UPDATE Employees SET _firstName = ?, _secondName = ?, _lastName = ?, _idNumber = ?, _cellphone = ?, _email = ? WHERE _idEmployee = ?", [values, id], (error, results) => {
        if (error) return res.json(error);
  
      return res.json(results);
    });
  });
  
  router.delete("/:id", (req, res) => {
    const id = req.params.id;
  
    db.query(`DELETE FROM Employees WHERE _idEmployee = ${id}`, (error, results) => {
      if (error){
        console.log(error)
        return res.json(error);
      } 

      return res.json(results);
    });
  });

  module.exports = router