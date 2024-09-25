const connectToDatabase = require("./config/db.js");
const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Use environment variable for the port, defaulting to 4000 if not provided
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use("/", routes);

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed!", err);
  });
