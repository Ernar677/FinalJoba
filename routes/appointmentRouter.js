const express = require('express');
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/appointments', auth, createAppointment);
router.get('/appointments', auth, getAppointments);

module.exports = router;
