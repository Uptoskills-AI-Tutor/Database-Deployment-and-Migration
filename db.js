// db.js
const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("MongoDB connection failed!");
    console.error(error.message);
    process.exit(1); // Exit app if DB fails
  }
};

module.exports = connectToDB;
