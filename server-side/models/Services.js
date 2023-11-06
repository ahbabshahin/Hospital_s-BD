const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema(
	{
		hId: {
			type: String,
		},

		title: {
			type: String,
		},

		desc: {
			type: String,
		},

		price: {
			type: Number,
		},

		image: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Service', ServicesSchema);
