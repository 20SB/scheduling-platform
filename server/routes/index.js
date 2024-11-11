// routes/index.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const appointmentController = require("../controllers/appointmentController");
const authenticate = require("../middleware/auth");

router.post("/register", authController.register);
router.post("/login", authController.login);

router.post("/appointments", authenticate, appointmentController.schedule);
router.get(
  "/appointments",
  authenticate,
  appointmentController.getAppointments
);

module.exports = router;
