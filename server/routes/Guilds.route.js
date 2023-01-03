const express = require("express");
const router = express.Router();
const db = require("../config/bd.config");
router.use(express.json());

router.get('/', (req, res) => {
    db.query('SELECT * FROM Guilds',
    (error, results) => {
        if(error) return res.json(error) 
        return res.json(results) 
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    db.query('SELECT * FROM Guilds WHERE _idGuild = ?',id, 
    (error, results) => {
        if(error) return res.json(error) 
        return res.json(results) 
    })
})

router.post('/', (req, res) =>{
    const values = [
        req.body._guildName,
        req.body._guildImage,
        parseInt(req.body._customerManager, 10)
    ]
    db.query('INSERT INTO Guilds(_guildName, _guildImage, _customerManager) VALUES (?,?,?)', 
    [values],
    (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
    })
})

router.put('/:id', (req, res) =>{
    const id = req.params.id 
    const values = [
        req.body._guildName,
        req.body._guildImage,
        parseInt(req.body._customerManager, 10)
    ]
    db.query('UPDATE Guilds SET _guildName = ?, _guildImage = ?, _customerManager = ?  WHERE _idCustomer = ?', 
    [values, id],
    (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
    })
})


router.delete('/:id', (req, res) =>{
    const id = req.params.id
    db.query('DELETE FROM Guilds WHERE _idGuild = ?', id,
    (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
    })
})

module.exports = router 