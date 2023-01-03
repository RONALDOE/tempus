const express = require("express");
const router = express.Router();
const db = require("../config/bd.config");
router.use(express.json());

router.get('/', (req, res) =>{
    db.query('SELECT * FROM WorkGroups', 
    (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
    })
})

router.get('/:id', (req, res)=>{
    const id = req.params.id

    db.query('SELECT * FROM WorkGroups WHERE _idGroup = ?',
    (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
    } )
})

router.post('/',(req,res) =>{
    const values = [
        req.body._groupName,
        parseInt(req.body._groupLeader, 10),
        parseInt(req.body._groupTask,10)
    ]

    db.query('INSERT INTO WorkGroups(_groupName, _groupLeader, _groupTask) VALUES ( ?, ?, ? )',
    [values],
    (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
    })
})

router.post('/:id',(req,res) =>{
    const id = req.params.id
    const values = [
        req.body._groupName,
        parseInt(req.body._groupLeader, 10),
        parseInt(req.body._groupTask,10)
    ]

    db.query('UPDATE WorkGroups SET _groupName = ?, _groupLeader = ?, _groupTask = ?  WHERE _idGroup = ?)',
    [values, id],
    (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
    })
})


router.delete('/:id', (req,res) =>{
    const id = req.params.id
    
    db.query('DELETE FROM WorkGroups WHERE _idGroup = ?', id,
    (error, results) =>{
        if(error) return res.json.error
        return res.json(results)
    })
})


module.exports = router



