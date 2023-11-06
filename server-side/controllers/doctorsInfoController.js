const Info = require('../models/DoctorsInfo');
const Inventory = require('../models/Inventory');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const getAllInfo = async (req, res) => {
	const { id } = req.params;

	const verify = await Inventory.findOne({ _id: id });

	if (!verify) {
		throw new NotFoundError(`No hospital with id ${id}`);
	}

	const info = await Info.find(
		{ hId: id },
		{
			name: 1,
			department: 1,
			schedule: 1,
			fee: 1,
		}
	);

	res.status(StatusCodes.OK).json({ info, count: info.length });
};

const createInfo = async (req, res) => {
	const { id } = req.params;
	const { name, department, schedule, fee } = req.body;

	const verify = await Inventory.findOne({ _id: id });

	if (!verify) {
		throw new NotFoundError(`No hospital with id ${id}`);
	} else {
		const info = await Info.create({
			hId: id,
			name: name,
			department: department,
			schedule: schedule,
			fee: fee,
		});

		res.status(StatusCodes.OK).json({ info });
	}
};

const getSingleInfo = async (req, res) => {
	const { id } = req.params;

	const info = await Info.findOne({ _id: id });

	if (!info) {
		throw new NotFoundError(`No info with id ${id}`);
	}

	res.status(StatusCodes.OK).json({ info });
};

const updateInfo = async (req, res) => {
	const { id } = req.params;

	const verify = await Info.findOne({ _id: id });

	if (!verify) {
		throw new NotFoundError(`No info with id ${id}`);
	}

	const info = await Info.findOneAndUpdate({ _id: id }, req.body, {
		new: true,
		runValidators: true,
	});

	res.status(StatusCodes.OK).json({ info });
};

const deleteInfo = async (req, res) => {
	const { id } = req.params;

	const name = await Info.findOne({ _id: id }, { name: 1 });

	const info = await Info.findOneAndDelete({ _id: id });

	res.status(StatusCodes.OK).json({
		msg: `${name.name} been deleted successfully`,
	});
};

module.exports = {
	getAllInfo,
	createInfo,
	getSingleInfo,
	updateInfo,
	deleteInfo,
};
