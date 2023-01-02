const express = require("express")
const cors = require("cors")

const app = express();

const employees = require("./routes/Employees.route")
app.use("/employees", employees)

app.listen(8000,() =>{
    console.log("Backend Funcionando")
})