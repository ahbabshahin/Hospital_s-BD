const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide hospital name'],
		},

		division: {
			type: String,
			required: [true, 'Please provide division name'],
		},

		district: {
			type: String,
			required: [true, 'Please provide district name'],
		},

		address: {
			type: String,
			required: [true, 'Please provide hospital address'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Inventory', InventorySchema);
