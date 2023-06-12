const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB using the provided MONGODB_URI environment variable
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'carInventory',
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;