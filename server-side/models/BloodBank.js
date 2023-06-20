const mongoose = require('mongoose');

const BloodBankSchema = new mongoose.Schema(
	{
		hId: {
			type: String,
		},

		group: {
			type: String,
		},
		amount: {
			type: Number,
		},

		contacts: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('BloodBank', BloodBankSchema);
