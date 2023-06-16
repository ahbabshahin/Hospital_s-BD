const express = require('express');
const router = express.Router();

const {
	getAllAppointments,
	getSingleAppointment,
	createAppointment,
	deleteAppointment,
} = require('../controllers/appointmentController');

router.route('/').get(getAllAppointments);
router
	.route('/:id')
	.post(createAppointment)
	.get(getSingleAppointment)
	.delete(deleteAppointment);

module.exports = router;
