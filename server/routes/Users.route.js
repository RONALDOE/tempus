const express = require('express');
const router = express.Router();
const db = require('../config/bd.config')

router.get("/", (req, res) => {
    // Consulta a la base de datos para obtener a todos los usuarios
    db.query("SELECT * FROM Users", (error, results) => {
        if (error) return res.json(error);
  
      // Envía la respuesta con los resultados de la consulta
      return res.json(results);
    });
  });
  
  router.get("/:id", (req, res) => {
    // Obtiene el ID del usuario desde la ruta
    const id = req.params.id;
  
    // Consulta a la base de datos para obtener al usuario con el ID especificado
    db.query("SELECT * FROM Users WHERE _idUser = ?", id, (error, results) => {
        if (error) return res.json(error);
  
        // Envía la respuesta con los resultados de la consulta
        return res.json(results[0]);
    });
  });
  
  router.post("/", (req, res) => {
    // Obtiene los datos del usuario desde el cuerpo de la solicitud
    const user = req.body;
  
    // Inserción del usuario en la base de datos
    db.query("INSERT INTO Users SET ?", user, (error, results) => {
        if (error) return res.json(error);
  
        // Envía la respuesta con los resultados de la consulta
        return res.json(results);
    });
  });
  
  router.put("/:id", (req, res) => {
    // Obtiene el ID del usuario y los datos actualizados desde la ruta y el cuerpo de la solicitud, respectivamente
    const id = req.params.id;
    const user = req.body;
  
    // Actualiza al usuario en la base de datos
    db.query("UPDATE Users SET ? WHERE _idUser = ?", [user, id], (error, results) => {
        if (error) return res.json(error);
  
        // Envía la respuesta con los resultados de la consulta
        return res.json(results);
    });
  });
  
  router.delete("/users/:id", (req, res) => {
    // Obtiene el ID del usuario desde la ruta
    const id = req.params.id;
  
    // Elimina al usuario de la base de datos
    db.query("DELETE FROM Users WHERE _idUser = ?", id, (error, results) => {
        if (error) return res.json(error);
  
        // Envía la respuesta con los resultados de la consulta
        return res.json(results);
    });
  });

  module.exports = router