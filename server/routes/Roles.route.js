const express = require("express");
const router = express.Router();
const db = require("../config/bd.config");
router.use(express.json());

router.get('/', (req, res) =>{
    db.query('SELECT * FROM Roles',
     (error, results) =>{
        if(error) return res.json(error)
        else return res.json(results)
    })
})

router.get('/:id', (req,res) => {
    const id = req.params.id 
     db.query('SELECT * FROM Roles WHERE _idRole = ?',
      id,
       (error, results) => {
        if(error) return res.json(error)
        return ress.json(results)
       })
})

router.post('/', (req,res) => {
    const values = [
        req.body._roleName,
        req.body._roleDescription
    ]

    db.query('INSERT INTO Roles(_roleName, _roleDescription) VALUES (?,?)', 
    [values],
    (error, results) => {
        if(error) return res.json(error)
        return res.json(results)
    })
})


router.put('/:id', (req,res) =>{
    const id = req.params.id
    const values = [
        req.body._roleName,
        req.body._roleDescription
    ]
    db.query('UPDATE Roles SET _roleName = ?, _roleDescription = ? WHERE _idRole = ?',
     [values, id],
     (error,results) => {
        if(error) return res.json(error)
        return res.json(results)
     }) 
})


router.delete('/:id', (req, res) =>{
    const id = req.params.id
    
    db.query('DELETE FROM Roles WHERE _idRole = ?',
    id, 
    (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
    })
})

module.exports = router