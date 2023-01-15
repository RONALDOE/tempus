const express = require("express")
const cors = require("cors")

const app = express();
app.use(cors())

const login = require('./routes/Login.route')
app.use("/login", login)

const billing_plans = require("./routes/Billing_Plans.route")
app.use("/billing_plans", billing_plans)

const customers = require("./routes/Customers.route")
app.use("/customers", customers)/* */

const employees = require("./routes/Employees.route")
app.use("/employees", employees)

const guilds = require("./routes/Guilds.route")
app.use("/guilds", guilds)/* */

const payment_methods = require("./routes/Payment_Methods.route")
app.use("/payment_methods", payment_methods)/* */

const proyects = require("./routes/Proyects.route")
app.use("/proyects", proyects)/* */

const roles = require("./routes/Roles.route")
app.use("/roles", roles)/* */

const tasks = require("./routes/Tasks.route")
app.use("/tasks", tasks)/* */

const user_roles = require("./routes/User_Roles.route")
app.use("/user_roles", user_roles)/* */

const users = require("./routes/Users.route")
app.use("/users", users)/* */

const workgroups = require("./routes/WorkGroups.route")
app.use("/workgroups", workgroups)/* */

app.get('/', (req, res) =>{
    res.status(200).send("si")
})

app.listen(8000,() =>{
    console.log("Backend Funcionando")
})