const express = require('express');
const router = express.Router();

const {
	getAllBookings,
	getSingleBooking,
	createBooking,
	deleteBooking,
} = require('../controllers/bookingController');

router.route('/:hId').get(getAllBookings);
router
	.route('/:hId/:sId')
	.post(createBooking)
	.get(getSingleBooking)
	.delete(deleteBooking);

module.exports = router;
