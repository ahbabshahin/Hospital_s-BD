const mongoose = require('mongoose');

const AppointmentsSchema = new mongoose.Schema(
	{
		hId: {
			type: String,
		},
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
			date: {
				type: String,
				required: [true, 'Please provide date'],
			},
			time: {
				type: String,
				required: [true, 'Please provide time'],
			},
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
