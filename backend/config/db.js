const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin3:LdK8gVhLSqy8Tgv9@cluster0.mg54tvx.mongodb.net/");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB Error:", err);
    process.exit(1);
  }
};


module.exports = connectDB;
