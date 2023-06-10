const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000
const express = require('express')
const dotenv = require('dotenv')
const router = require('./router.js')
dotenv.config()
const Car = require("./models/carModel.js")

const connectDB = require('./config/dbConnect.js')
connectDB()

const app = express()

app.use('/api/cars', router)

// Listening for PORT and Database
mongoose.connection.on('error', function () {
    console.log("Couldn't connect to MongoDB. Exiting now...")
    process.exit(1)
})

mongoose.connection.once('open', function () {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
    })
})



