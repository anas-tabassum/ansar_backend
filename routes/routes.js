const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/test", (req, res) => {
  res.send("<h1>Ansar Backend is up and running :)</h1>");
});

router.post("/hajj_book", (req, res) => {
  const data = req.body;
  controller.registerHajjController(data, res);
});

router.post("/umra_book", (req, res) => {
  const data = req.body;
  controller.registerUmraController(data, res);
});

router.get("/hajj_records", (req, res) => {
  controller.fetchHajjController(res);
});

router.get("/umra_records", (req, res) => {
  controller.fetchUmraController(res);
});

module.exports = router;
