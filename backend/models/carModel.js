const mongoose = require('mongoose')

let carSchema = mongoose.Schema({
    model: Number,
    make: String,
    regNumber: String,
    owner: String,
    image: String
})
module.exports = mongoose.model("Car", carSchema)