// This file is only used to populate or clear the database of for the application

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cars = require('./data/cars.js')
const Car = require('./models/carModel.js')
const connectDB = require('./config/dbConnect.js')
const colors = require('colors')


dotenv.config()

connectDB()

const importData = async () => {
    try {
        // Clear the DB
        await Car.deleteMany()

        // Import the array of cars
        await Car.insertMany(cars)

        console.log(`Succesful Import`.green.inverse)
        process.exit()
    } catch (e){
        console.log(`${e}.red.inverse`)
        process.exit(1)
    }
}

// Clear the DB
const deleteData = async () => {
    try {
        await Car.deleteMany()
        console.log(`Data Deleted`.red.inverse)
        process.exit()
    } catch (e) {
        console.log(`${e}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === "-d") {
    deleteData()
} else {
    importData()
}