const mongoose = require('mongoose');

const AppointmentsSchema = new mongoose.Schema(
	{
		dId: {
			type: String,
		},

		name: {
			type: String,
			required: [true, 'Please provide name'],
		},

		address: {
			type: String,
		},

		schedule: {
			type: String,
			required: [true, 'Please provide time & date'],
		},

		age: {
			type: Number,
		},
		contacts: {
			type: String,
			required: [true, 'Please provide contact number'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Appointment', AppointmentsSchema);
