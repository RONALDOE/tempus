const express = require("express")
const db = require("../config/bd.config")
const router = express.Router()
router.use(express.json())

router.get('/', (req,res) =>{
    db.query('SELECT * FROM Tasks',(error, results)=>{
        if(err) return res.json(error)
        return res.json(results)
    } )
})


module.exports = router