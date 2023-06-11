const express = require('express')
const homeRouter = require('./routes/home.js')
const contactRouter = require('./routes/contacts.js')
const userModel = require('./models/userModel.js')
const { errorHandler } = require('./middlewars/errorhandler.js')
const connectDB = require('./config/connectdb.js')
const dotenv = require('dotenv').config()

connectDB()
const app = express()

// userModel.create({
//     firstname: "Mike",
//     lastname: "Dreeman",
//     email: "test@gmail.com",
// })

app.use(express.static("public"))
app.use(express.json)
app.use(errorHandler)

app.use('/', homeRouter)
app.use('/contacts', contactRouter)


const port = process.env.PORT || 3001
app.listen(port, ()=>{
    console.log("Server is listening on port ", port)
})