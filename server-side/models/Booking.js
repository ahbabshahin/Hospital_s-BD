const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
	{
		hId: {
			type: String,
		},
		sId: {
			type: String,
		},
		name: {
			type: String,
			required: [true, 'Please provide name'],
		},

		schedule: {
			date: {
				type: String,
				required: [true, 'Please provide date'],
			},
			time: {
				type: String,
				required: [true, 'Please provide time'],
			},
		},

		contacts: {
			type: String,
			required: [true, 'Please provide contact number'],
		},

		age: {
			type: Number,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Booking', BookingSchema);
