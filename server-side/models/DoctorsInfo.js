const mongoose = require('mongoose');

const DoctorsSchema = new mongoose.Schema(
	{
		hId: {
			type: String,
		},

		name: {
			type: String,
		},

		department: {
			type: String,
		},

		schedule: {
			type: String,
		},

		fee: {
			type: Number,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('DoctorsInfo', DoctorsSchema);
