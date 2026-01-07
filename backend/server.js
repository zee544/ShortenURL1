require('dotenv').config();


const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");


const app = express();



app.use(cors());
app.use(express.json());

connectDB();

app.use("/", require("./routes/urlRoutes"));

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});
