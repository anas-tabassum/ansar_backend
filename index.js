const connectToDatabase = require("./config/db.js");
const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();
const port = 4000;
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/", routes);

connectToDatabase()
  .then(() => {
    app.listen(port);
  })
  .catch((err) => {
    console.log("Database connection failed!");
  });
