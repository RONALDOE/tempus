const express = require("express");
const router = express.Router();
const db = require("../config/bd.config");
router.use(express.json());

router.get('/', (req, res) => {
    db.query('SELECT * FROM User_Roles', 
    (error, results) => {
        if(error) return res.json(error)
        return res.json(results)    
    })
})


module.exports = router
