const express = require("express");
const router = express.Router();
const db = require("../config/bd.config");
router.use(express.json())


const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
  const _userName = req.body._userName;
  const _password = req.body._password;

  const query = `SELECT * FROM Users WHERE _userName = '${_userName}' AND _password = '${_password}'`;
  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
      return;
    }

    if (results.length > 0) {

        const token = jwt.sign({ _userName}, 'secretkey');
      res.json({ token });
    } else {
      res.sendStatus(401);
    }
  });
});



module.exports = router