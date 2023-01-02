const express = require('express');
const router = express.Router();
const db = require('../config/bd.config')
router.use(express.json())

router.get("/", (req, res) => {
    // Consulta a la base de datos para obtener a todos los empleados
    db.query("SELECT * FROM Employees", (error, results) => {
      if (error) return res.json(error);
  
      // Envía la respuesta con los resultados de la consulta
      return res.json(results);
    });
  });
  
  router.get("/:id", (req, res) => {
    // Obtiene el ID del empleado desde la ruta
    const id = req.params.id;
  
    // Consulta a la base de datos para obtener al empleado con el ID especificado
    db.query("SELECT * FROM Employees WHERE _idEmployee = ?", id, (error, results) => {
        if (error) return res.json(error);
  
      // Envía la respuesta con los resultados de la consulta
      return res.json(results[0]);
    });
  });
  
  router.post("/", (req, res) => {
    // Obtiene los datos del empleado desde el cuerpo de la solicitud
    const employee = req.body;
  
    // Inserción del empleado en la base de datos
    db.query("INSERT INTO Employees SET ?", employee, (error, results) => {
        if (error) return res.json(error);
  
      // Envía la respuesta con los resultados de la consulta
      return res.json(results);
    });
  });
  
  router.put("/:id", (req, res) => {
    // Obtiene el ID del empleado y los datos actualizados desde la ruta y el cuerpo de la solicitud, respectivamente
    const id = req.params.id;
    const employee = req.body;
  
    // Actualiza al empleado en la base de datos
    db.query("UPDATE Employees SET ? WHERE _idEmployee = ?", [employee, id], (error, results) => {
        if (error) return res.json(error);
  
      // Envía la respuesta con los resultados de la consulta
      return res.json(results);
    });
  });
  
  router.delete("/:id", (req, res) => {
    // Obtiene el ID del empleado desde la ruta
    const id = req.params.id;
  
    // Elimina al empleado de la base de datos
    db.query("DELETE FROM Employees WHERE _idEmployee = ?", id, (error, results) => {
      if (error) return res.json(error);

      // Envía la respuesta con los resultados de la consulta
      return res.json(results);
    });
  });

  module.exports = router