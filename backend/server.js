const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const express = require('express');
const dotenv = require('dotenv');
const router = require('./router.js');
const cors = require('cors');
dotenv.config();

const connectDB = require('./config/dbConnect.js');
connectDB();

const app = express();

app.use('/api/cars', router);
app.use(cors());

// Listening for PORT and Database

// Handling MongoDB connection error
mongoose.connection.on('error', function () {
  console.log("Couldn't connect to MongoDB. Exiting now...");
  process.exit(1);
});

// Handling successful MongoDB connection
mongoose.connection.once('open', function () {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
