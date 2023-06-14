const Service = require('../models/Services');
const Inventory = require('../models/Inventory');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const getAllServices = async (req, res) => {
	const { id } = req.params;
	console.log(id);
	const verify = await Inventory.findOne({ _id: id });

	if (!verify) {
		throw new NotFoundError(`No hospital with id ${id}`);
	}
	const service = await Service.find(
		{ hId: id },
		{ title: 1, desc: 1, price: 1, image: 1 }
	);

	res.status(StatusCodes.OK).json({ service, count: service.length });
};

const createService = async (req, res) => {
	const { id } = req.params;
	const title = req.body.title;
	const desc = req.body.desc;
	const price = req.body.price;

	const verify = await Inventory.findOne({ _id: id });

	if (!verify) {
		throw new NotFoundError(`No hospital with id ${id}`);
	} else {
		const service = await Service.create({
			hId: id,
			title: title,
			desc: desc,
			price: price,
		});

		res.status(StatusCodes.OK).json({ service });
	}
};

const getSingleService = async (req, res) => {
	const { id } = req.params;

	const service = await Service.findOne(
		{ _id: id },
		{ title: 1, desc: 1, price: 1, image: 1 }
	);
	// const verify = await Inventory.findOne({ _id: id });

	if (!service) {
		throw new NotFoundError(`No service with id ${id}`);
	}

	res.status(StatusCodes.OK).json({ service });
};

const updateService = async (req, res) => {
	const { id } = req.params;
	const service = await Service.findOneAndUpdate({ _id: id }, req.body, {
		new: true,
		runValidators: true,
	});

	if (!service) {
		throw new NotFoundError(`No service with id ${id}`);
	}

	res.status(StatusCodes.OK).json({ service });
};

const deleteServices = async (req, res) => {
	const { id } = req.params;
	const name = await Service.findOne({ _id: id }, { title: 1 });
	const service = await Service.findOneAndDelete({ _id: id });

	res.status(StatusCodes.OK).json({
		msg: `${name.title} been deleted successfully`,
	});
};

module.exports = {
	getAllServices,
	createService,
	getSingleService,
	updateService,
	deleteServices,
};
