const express = require('express')
const router = express.Router()
const db = require('../config/bd.config')
router.use(express.json())

router.get('/', (req, res) =>{
    db.query('SELECT * FROM Payment_Methods', 
    (error, results) => {
    if(error) return res.json(error)
    return res.json(results)    
    })
})

router.get('/:id', (req, res) =>{
    
    const id = req.params.id 

    db.query('SELECT * FROM Payment_Methods', id,
    (error, results) => {
        if(error) return res.json(error)
        return res.json(results)    
        })
    

})

module.exports = router