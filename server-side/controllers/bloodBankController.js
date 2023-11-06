const BB = require('../models/BloodBank');
const Inventory = require('../models/Inventory');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const getAllInfo = async (req, res) => {
	const { hId } = req.params;

	const verify = await Inventory.findOne({ _id: hId });
	if (!verify) {
		throw new NotFoundError(`No information with id ${hId}`);
	}
	const bb = await BB.find(
		{ hId },
		{
			hId: 1,
			group: 1,
			amount: 1,
			contacts: 1,
		}
	);

	res.status(StatusCodes.OK).json({ bb, count: bb.length });
};

const getSingleInfo = async (req, res) => {
	const { hId, id } = req.params;

	const bb = await BB.findOne(
		{ _id: id, hId },
		{
			group: 1,
			amount: 1,
			contacts: 1,
		}
	);

	if (!bb) {
		throw new NotFoundError(`No information with id ${id}`);
	}

	res.status(StatusCodes.OK).json({ bb });
};

const createInfo = async (req, res) => {
	const { hId } = req.params;
	const { group, amount, contacts } = req.body;

	const verify = await Inventory.findOne({ _id: hId });
	console.log(verify);
	if (!verify) {
		throw new NotFoundError(`No information with id ${hId}`);
	}

	const bb = await BB.create({
		hId,
		group,
		amount,
		contacts,
	});

	res.status(StatusCodes.OK).json({ bb });
};

const updateInfo = async (req, res) => {
	const { hId, id } = req.params;

	const verify = await BB.findOne({ _id: id, hId });

	if (!verify) {
		throw new NotFoundError(`No information with id ${id}`);
	}

	const bb = await BB.findOneAndUpdate({ _id: id }, req.body, {
		new: true,
		runValidators: true,
	});

	res.status(StatusCodes.OK).json({ bb });
};

const deleteInfo = async (req, res) => {
	const { hId, id } = req.params;

	const bb = await BB.findOneAndDelete({ _id: id, hId });

	res.status(StatusCodes.OK).json({
		msg: 'Information deleted successfully',
	});
};

module.exports = {
	getAllInfo,
	getSingleInfo,
	createInfo,
	updateInfo,
	deleteInfo,
};
