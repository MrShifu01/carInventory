const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "carInventory",
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (e) {
        console.error(e)
    }
}

module.exports = connectDB