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

router.post('/signup', (req, res) =>{
  const values = [
    req.body._userName,
    req.body._password,
    req.body._proyectName,
    req.body._proyectDescription,
    req.body._name,
    req.body._lastName,
    req.body._idNumber,
    req.body._cellphone,
    req.body._email
  ]

  const queryEmployee = `Insert into employees (_name, _lastName, __idNumber, _cellphone, _email) values ('${values._name}', '${values._lastName}', '${values._idNumber}', '${values._cellphone}', '${values.email}');`
  const queryProyects = `insert into proyects(_proyectName, _proyectDescription, _proyectAdmin) values ('${values._proyectName}', '${values._proyectDescription}', (select _idUser from users where users._userName ='${values._userName}'))`
  const queryUser = `insert into users(_userName, _password,_idEmployee,_idProyect) values('${values._userName}', '${values._password}', (select _idEmployee from employees where employees._idNumber ='${values._idNumber}, (Select _idProyect where proyects._proyectName = ${values._proyectName} )) )`

  db.query(queryEmployee,(error, results)=>{
    if(error) return res.send(error)
    console.log("Paso 1")
  })
  db.query(queryProyects, (error, results)=>{
    
    if(error) return res.send(error)
    console.log("Paso 2")
  })
  db.query(queryUser, (error,results)=>{
    if(error) return res.send(error)
    console.log("Paso 2")
  })


})


module.exports = router