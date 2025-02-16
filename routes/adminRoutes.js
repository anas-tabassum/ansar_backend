const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const controller = require("../controller/adminController");

router.post("/lesson", authMiddleware, async (req, res) => {
    controller.updateLesson(req, res);
});

router.post("/umrah", authMiddleware, async (req, res) => {
    res.json({ message: "Umrah saved successfully" });
});

router.post("/hajj", authMiddleware, async (req, res) => {
    res.json({ message: "Hajj saved successfully" });
});

module.exports = router;
