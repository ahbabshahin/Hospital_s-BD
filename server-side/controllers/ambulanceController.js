const Ambulance = require('../models/Ambulance');
const Inventory = require('../models/Inventory');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const getAllAmbulance = async (req, res) => {
	const { hId } = req.params;

	const verify = await Inventory.find({ _id: hId });

	if (!verify) {
		throw new NotFoundError(`No information with id ${hId}`);
	}

	const amb = await Ambulance.find(
		{ hId },
		{
			hId: 1,
			siNo: 1,
			contacts: 1,
			isActive: 1,
		}
	);

	res.status(StatusCodes.OK).json({ amb, count: amb.length });
};

const getSingleAmbulance = async (req, res) => {
	const { hId, id } = req.params;

	const amb = await Ambulance.findOne(
		{ _id: id, hId },
		{
			hId: 1,
			siNo: 1,
			contacts: 1,
			isActive: 1,
		}
	);

	if (!amb) {
		throw new NotFoundError(`No information with id ${id}`);
	}

	res.status(StatusCodes.OK).json({ amb });
};

const createAmbulance = async (req, res) => {
	const { hId } = req.params;
	const { siNo, contacts, isActive } = req.body;
	const verify = await Inventory.findOne({ _id: hId });

	if (!verify) {
		throw new NotFoundError(`No information with id ${hId}`);
	}

	const amb = await Ambulance.create({
		hId,
		siNo,
		contacts,
		isActive,
	});

	res.status(StatusCodes.OK).json({ amb });
};

const updateAmbulance = async (req, res) => {
	const { hId, id } = req.params;

	const verify = await Ambulance.findOne({ _id: id, hId });

	if (!verify) {
		throw new NotFoundError(`No information  with id ${id}`);
	}

	const amb = await Ambulance.findOneAndUpdate({ _id: id, hId }, req.body, {
		new: true,
		runValidators: true,
	});

	res.status(StatusCodes.OK).json({ amb });
};

const deleteAmbulance = async (req, res) => {
	const { id, hId } = req.params;

	const amb = await Ambulance.findOneAndDelete({ _id: id, hId });

	res.status(StatusCodes.OK).json({ msg: 'Ambulance deleted successfully' });
};

module.exports = {
	getAllAmbulance,
	getSingleAmbulance,
	createAmbulance,
	updateAmbulance,
	deleteAmbulance,
};
