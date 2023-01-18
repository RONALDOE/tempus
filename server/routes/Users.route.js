const express = require("express");
const router = express.Router();
const db = require("../config/bd.config");
router.use(express.json());

router.get("/", (req, res) => {
  db.query("SELECT * FROM Users", (error, results) => {
    if (error) return res.json(error);

    return res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM Users WHERE _idUser = ?", id, (error, results) => {
    if (error) return res.json(error);

    return res.json(results[0]);
  });
});

router.post("/", (req, res) => {
  const values = [
    req.body._userName,
    req.body._password,
    parseInt(req.body._idEmployee, 10),
    parseInt(req.body._idCustomer, 10),
  ];
  db.query(
    "INSERT INTO Users(_userName, _password, _idEmployee, _idCustomer) values (?,?,?,?)",
    values,
    (error, results) => {
      if (error) return res.json(error);

      return res.json(results);
    }
  );
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const values = [
    req.body._userName,
    req.body._password,
    parseInt(req.body._idEmployee, 10),
    parseInt(req.body._idCustomer, 10),
  ];

  db.query(
    "UPDATE Users SET _username = ?, _password = ?, _idEmployee = ?, _idCustomer = ?  WHERE _idUser = ?",
    [values, id],
    (error, results) => {
      if (error) return res.json(error);

      return res.json(results);
    }
  );
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM Users WHERE _idUser = ?", id, (error, results) => {
    if (error) return res.json(error);

    return res.json(results);
  });
});

module.exports = router;
