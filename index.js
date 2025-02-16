const connectToDatabase = require("./config/db.js");
const express = require("express");
const routes = require("./routes/routes");
const adminRoutes = require("./routes/adminRoutes");
const cors = require("cors");
const path = require("path");
const app = express();
require("dotenv").config();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Use environment variable for the port, defaulting to 4000 if not provided
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use("/", routes);
app.use("/admin", adminRoutes);

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed!", err);
  });
