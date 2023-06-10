const Inventory = require('../models/Inventory');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const getAllHospitals = async (req, res) => {
	const invent = await Inventory.find({});
	res.status(StatusCodes.OK).json({ invent, count: invent.length });
};

const createHospital = async (req, res) => {
	const invent = await Inventory.create(req.body);
	res.status(StatusCodes.OK).json({ invent });
};

const getSingleHospital = async (req, res) => {
	const { id } = req.params;

	const invent = await Inventory.findOne(
		{ _id: id },
		{
			name: 1,
			division: 1,
			district: 1,
			address: 1,
		}
	);

	if (!invent) {
		throw new NotFoundError(`No hospital with ${id} `);
	}

	res.status(StatusCodes.OK).json({ invent });
};

const updateHospital = async (req, res) => {
	const { id } = req.params;

	const invent = await Inventory.findOneAndUpdate({ _id: id }, req.body, {
		new: true,
		runValidators: true,
	});

	if (!invent) {
		throw new NotFoundError(`No hospital with ${id} `);
	}

	res.status(StatusCodes.OK).json({ invent });
};

const deleteHospital = async (req, res) => {
	const { id } = req.params;

	const name = await Inventory.findOne({ _id: id }, { name: 1 });
	// console.log(name);
	const invent = await Inventory.findOneAndDelete(id);

	// if (!invent) {
	// 	throw new NotFoundError(`No hospital with ${id} `);
	// }
	// console.log(name.name);
	res.status(StatusCodes.OK).json({
		msg: `${name.name} been deleted successfully`,
	});
};

module.exports = {
	getAllHospitals,
	createHospital,
	getSingleHospital,
	updateHospital,
	deleteHospital,
};
