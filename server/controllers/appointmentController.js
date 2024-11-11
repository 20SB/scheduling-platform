// controllers/appointmentController.js
const Appointment = require("../models/Appointment");

// Schedule an Appointment
exports.schedule = async (req, res) => {
  try {
    const appointment = new Appointment({ ...req.body, userId: req.user.id });
    await appointment.save();
    res.status(201).send("Appointment scheduled successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get Appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.user.id });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
