const express = require("express");
const router = express.Router();
const db = require("../config/bd.config");
router.use(express.json());


router.get('/', (req, res) =>{
    db.query('SELECT * FROM Customer',
    (error, results) => {
        if(error) return res.json(error)
        return res.json(results)    
    })    
})


router.get('/:id', (req, res) =>{
    const id = req.params.id
    
    db.query('SELECT * FROM Customer WHERE _idCustomer = ?',id,
    (error, results) => {
        if(error) return res.json(error)
        return res.json(results)    
    })    
})

router.post('/', (req, res) => {
    const values = [
        req.body._selectedPlan,
        req.body.emailCustomer,
        req.body._cellphoneCustomer,
        req.body._isEnterprise,
        req.body._isProyect
    ]
    db.query('INSERT INTO Customers(_selectedPlan, _emailCustomer, _cellphoneCustomer, _isEnterprise, _Proyect) VALUES (?,?,?,?)', [values],
    (error, results) => {
        if(error) return res.json(error)
        return res.json(results)    
        })    
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const values = [
        req.body._selectedPlan,
        req.body.emailCustomer,
        req.body._cellphoneCustomer,
        req.body._isEnterprise,
        req.body._isProyect
    ]
    db.query('UPDATE Customers SET _selectedPlan = ?, _emailCustomer = ?, _cellphoneCustomer = ?, _isEnterprise = ?, _Proyect = ? WHERE _idCustomer = ?',
    [values, id],
    (error, results) => {
        if(error) return res.json(error)
        return res.json(results)    
    })    
})

router.delete('/:id', (req, res) =>{
    const id = req.params.id

    db.query('DELETE FROM Customers',
    id,
    (error, results) => {
        if(error) return res.json(error)
        return res.json(results)
    })
})

module.exports = router