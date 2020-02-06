const express = require('express')
require("./db/mongoose.js")
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server is up and running "+port)
})

const bcrypt = require("bcryptjs")

const myFunction = async () => {
    const password = "Ajay@123"
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Ajay@123', hashedPassword)
    console.log(isMatch)
}

myFunction()
