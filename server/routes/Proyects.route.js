const express = require("express");
const db = require("../config/bd.config");
const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  db.query("SELECT * FROM Proyects", (error, results) => {
    if (error) return res.json(error);
    return res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT * FROM Proyects WHERE _idProyect = ?",
    id,
    (error, results) => {
      if (error) return res.json(error);
      return res.json(results[0]);
    }
  );
});

router.post("/", (req, res) => {
  const values = [
    req.body._proyectName,
    req.body._proyectDescription,
    req.body._startDate,
    req.body._deliveryDate,
    req.body._finishDate,
    req.body._proyectImage,
  ];

  db.query(
    "INSERT INTO Proyects(_proyectName, _proyectDescription, _startDate, _proyectDeadline, _finishDate, _proyectImage) VALUES (?, ?, ?, ?, ?)",
    [values],
    (error, results) => {
      if (error) return res.json(error);
      return res.json(results);
    }
  );
});

router.put(":id/", (req, res) => {
  const id = req.params.id;
  const values = [
    req.body._proyectName,
    req.body._proyectDescription,
    req.body._startDate,
    req.body._deliveryDate,
    req.body._finishDate,
    req.body._proyectImage,
  ];

  db.query(
    "UPDATE Proyects SET _proyectName  = ?, _proyectDescription = ?, _startDate = ?, _proyectDeadline = ?, _finishDate = ?, _proyectImage = ? WHERE _idProyect = ?",
    [values, id],
    (error, results) => {
      if (error) return res.json(error);
      return res.json(results);
    }
  );
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "DELETE FROM Proyects WHERE _idProyect = ?",
    id,
    (error, results) => {
      if (error) return res.json(error);
      return res.json(results);
    }
  );
});

module.exports = router;
