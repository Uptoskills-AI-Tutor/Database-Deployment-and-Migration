// index.js or server.js
const express = require("express");
const app = express();
const connectToDB = require("./db"); 

require("dotenv").config();

const forumRoutes = require("./routes/forum");


const PORT = process.env.PORT || 5000;

// Connect to DB
connectToDB();

app.use(express.json());

app.use("/forum", forumRoutes);

// Sample route
app.get("/", (req, res) => {
  res.send("API is working fine.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
