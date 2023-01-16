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

      const token = jwt.sign({ _userName}, 'secretkey', {expiresIn: "3h"} );
      res.json({ token, results });
    } else {
      res.sendStatus(401);
    }
  });
});

router.post('/check-token', (req, res) =>{
  const { token } = req.body;

  try {
    // verifica que el token es válido
    const decoded = jwt.verify(token, 'secretkey');
    // si no hay errores, el token es válido
    return res.json({ valid: true });
  } catch (error) {
    // si hay un error, el token es inválido
    return res.json({ valid: false });
  }
})



module.exports = router