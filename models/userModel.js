const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel, userSchema