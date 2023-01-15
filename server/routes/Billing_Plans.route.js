const express = require("express");
const { identity } = require("lodash");
const db = require("../config/bd.config")
const router = express.Router();
router.use(express.json())


router.get('/', (req,res) =>{
    db.query("SELECT * FROM Billing_Plans", (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
    })
})


router.get('/:id', (req, res) =>{
    const id = req.params.id
    db.query("SELECT * FROM Billing_Plans WHERE _idPlan = ?",
    id,
    (error, results) =>{
        if(error) return res.json(error)
        return res.json(results[0])
    })
})

router.post('/', (req,res) =>{
    const values=[
        req.body._planType,
        req.body._pricePerMonth,
        req.body._pricePerYear,
        req.body._storage,
        req.body._maxAccountsNumber,
        req.body._maxGroupsNumber
    ]
    db.query('INSERT INTO Billing_Plan(_planType, _pricePerMonth, _pricePerYear, _storage, _maxAccountsNumber, _maxGroupsNumber)',
    [values],
    (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
    })
})


router.put('/:id', (req,res) =>{
    const id = req.params.id
    const values=[
        req.body._planType,
        req.body._pricePerMonth,
        req.body._pricePerYear,
        req.body._storage,
        req.body._maxAccountsNumber,
        req.body._maxGroupsNumber
    ]
    db.query('UPDATE Billing_Plan SET  _planType = ?, _pricePerMonth = ?, _pricePerYear = ?, _storage = ?, _maxAccountsNumber = ?, _maxGroupsNumber = ? WHERE _idTask = ?',
    [values,id],
    (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
    })
    
})

router.delete('/:id', (req, res) =>{
    const id = req.params.id

    db.query("DELETE FROM Tasks WHERE _idTask = ?",
    id,
    (error, results)=>{
        if(error) return res.json(error)
        return res.json(results)

    })
})



module.exports = router;
