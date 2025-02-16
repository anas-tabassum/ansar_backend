const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");
const { sendEmailContact } = require("../controller/emailController");
const admin = require("../model/createAdmin");

router.get("/test", (req, res) => {
  res.send("<h1>Ansar Backend is up and running :)</h1>");
});

// router.get("/email", (req, res) => {
//   sendEmail("work632294@gmail.com");
// });

router.post("/contact_email", (req, res) => {
  sendEmailContact(req.body, res);
});

router.post("/hajj_book", (req, res) => {
  const data = req.body;
  controller.registerHajjController(data, res);
});

router.post("/umra_book", (req, res) => {
  const data = req.body;
  controller.registerUmraController(data, res);
});

router.post("/admin-login", (req, res) => {
  const data = req.body;
  controller.adminLoginController(data, res);
});

router.get("/hajj_records", (req, res) => {
  controller.fetchHajjController(res);
});

router.get("/umra_records", (req, res) => {
  controller.fetchUmraController(res);
});

router.get("/records", async (req, res) => {
  try {
    // Fetch Hajj and Umra records from your API or database
    const hajjResponse = await fetch(
      "https://ansar-backend.onrender.com/hajj_records"
    );
    const umraResponse = await fetch(
      "https://ansar-backend.onrender.com/umra_records"
    );

    const hajjRecords = await hajjResponse.json();
    const umraRecords = await umraResponse.json();

    // Render the EJS template and pass the records to it
    res.render("records", {
      hajjRecords: hajjRecords.data,
      umraRecords: umraRecords.data,
    });
  } catch (error) {
    res.status(500).send("Error fetching records");
  }
});

router.get("/lessons", async (req, res) => {
  try {
    await controller.fetchLecturesController(req, res);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching videos", error: error.message });
  }
});

module.exports = router;
