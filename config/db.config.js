const mongoose = require("mongoose");
const dotenv = require("dotenv/config");

const MONGO_URL = process.env.MONGO_URL;
const connectDB = async () => {
    try {
      await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      });
  
      console.log('✅ MongoDB Connected...');
    } catch (err) {
      console.error(err.message);
      // Exit process with failure
      process.exit(1);
    }
  };

module.exports = connectDB;