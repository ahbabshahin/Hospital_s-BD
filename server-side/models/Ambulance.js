const mongoose = require('mongoose');

const AmbulanceSchema = new mongoose.Schema(
	{
		hId: {
			type: String,
		},

		siNo: {
			type: String,
		},

		contacts: {
			type: String,
		},

		isActive: {
			type: Boolean,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Ambulance', AmbulanceSchema);
