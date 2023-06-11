const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connec = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Connected")
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB