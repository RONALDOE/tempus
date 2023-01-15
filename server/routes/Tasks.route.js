const express = require("express");
const db = require("../config/bd.config");
const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  db.query("SELECT * FROM Tasks", (error, results) => {
    if (error) return res.json(error);
    return res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM Tasks WHERE _idTask = ?", id, (error, results) => {
    if(error) return res.json(error)
    return res.json(results[0])
  });
});
router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM Tasks WHERE _designatedEmployee = ?", id, (error, results) => {
    if(error) return res.json(error)
    return res.json(results[0])
  });
});
router.post('/', (req,res) =>{
    const values =[
        req.body._taskDescription,
        req.body._taskDeadline,
        req.body._taskStatus
    ]

    db.query('INSERT INTO Tasks(_taskDescription, _taskDeadline, _taskStatus) VALUES ?',
     [values], (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
     })
})

router.put('/:id', (req,res) =>{
    const id = req.params.id
    const values =[
        req.body._taskDescription,
        req.body._taskDeadline,
        req.body._taskStatus
    ]

    db.query('UPDATE Tasks SET _taskDescription = ?, _taskDeadline = ?, _taskStatus = ? WHERE _idTask = ?',
     [values, id], (error, results) =>{
        if(error) return res.json(error)
        return res.json(results)
     })
})

router.delete('/:id', (req, res) =>{
    const id = req.params.id

    db.query("DELETE FROM Users WHERE _idUser = ?",
    id,
    (error, results)=>{
        if(error) return res.json(error)
        return res.json(results)

    })
})



module.exports = router;
