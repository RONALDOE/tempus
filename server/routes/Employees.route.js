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
  
      return res.json(results);
    });
  });
  
  router.post("/", (req, res) => {
    const values = [
      req.body._name,
      req.body._lastName,
      parseInt(req.body._idNumber,10),
      req.body._cellphone,
      req.body._email
    ];
  
    db.query("INSERT INTO Employees(_firstName, _secondName, _lastName, _idNumber, _cellphone, _email) VALUES (?,?,?,?,?,?)", [values], (error, results) => {
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
  
    db.query("DELETE FROM Employees WHERE _idEmployee = ?", id, (error, results) => {
      if (error) return res.json(error);

      return res.json(results);
    });
  });

  module.exports = router