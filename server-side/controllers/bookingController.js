const Booking = require('../models/Booking');
const Services = require('../models/Services');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const getAllBookings = async (req, res) => {
	const { hId } = req.params;

	const book = await Booking.find({ hId });

	res.status(StatusCodes.OK).json({ book, count: book.length });
};

const getSingleBooking = async (req, res) => {
	const { hId, sId } = req.params;

	const verify = await Services.find({ hId, _id: sId });
	console.log(sId);

	if (!verify) {
		throw new NotFoundError(`No services with id ${sId}`);
	}

	const book = await Booking.find({ hId, sId });

	res.status(StatusCodes.OK).json({ book, count: book.length });
};

const createBooking = async (req, res) => {
	const { hId, sId } = req.params;
	const { name, schedule, contacts, age } = req.body;
	const verify = await Services.findOne({ hId, _id: sId });
	console.log(verify);
	if (!verify) {
		throw new NotFoundError(`No services with id ${sId}`);
	}

	const book = await Booking.create({
		hId,
		sId,
		name,
		schedule,
		contacts,
		age,
	});

	res.status(StatusCodes.OK).json({ book });
};

const deleteBooking = async (req, res) => {
	const { hId, sId } = req.params;
	const verify = await Services.findOne({ hId, _id: sId });

	if (!verify) {
		throw new NotFoundError(`No services with id ${sId}`);
	}

	const book = await Booking.findOneAndDelete({ hId, sId });

	res.status(StatusCodes.OK).json({ msg: 'Booking deleted successfully' });
};

module.exports = {
	getAllBookings,
	getSingleBooking,
	createBooking,
	deleteBooking,
};
