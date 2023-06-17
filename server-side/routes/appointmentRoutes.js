const express = require('express');
const router = express.Router();

const {
	getAllAppointments,
	getSingleAppointment,
	createAppointment,
	deleteAppointment,
} = require('../controllers/appointmentController');

router.route('/:hId').get(getAllAppointments);
router
	.route('/:hId/:dId')
	.post(createAppointment)
	.get(getSingleAppointment)
	.delete(deleteAppointment);

module.exports = router;
