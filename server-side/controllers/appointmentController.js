const Appointment = require('../models/Appointments');
const DocInfo = require('../models/DoctorsInfo');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const getAllAppointments = async (req, res) => {
	const app = await Appointment.find({});
	res.status(StatusCodes.OK).json({ app, count: app.length });
};

const getSingleAppointment = async (req, res) => {
	const { id } = req.params;

	const app = await Appointment.find(
		{ dId: id },
		{
			name: 1,
			address: 1,
			schedule: 1,
			age: 1,
			contacts: 1,
		}
	);

	res.status(StatusCodes.OK).json({ app, count: app.length });
};

const createAppointment = async (req, res) => {
	const { id } = req.params;
	const { name, address, schedule, age, contacts } = req.body;

	const verify = await DocInfo.findOne({ _id: id });

	if (!verify) {
		throw new NotFoundError('Invalid Credentials');
	} else {
		const app = await Appointment.create({
			dId: id,
			name,
			address,
			schedule,
			age,
			contacts,
		});

		res.status(StatusCodes.OK).json({ app });
	}
};

const deleteAppointment = async (req, res) => {
	const { id } = req.params;

	const verify = await Appointment.findOne({ _id: id });
	if (!verify) {
		throw new NotFoundError(`No appointment with id ${id}`);
	}

	const app = await Appointment.findOneAndDelete({ _id: id });

	res.status(StatusCodes.OK).json({
		msg: 'Appointment been deleted successfully',
	});
};

module.exports = {
	getAllAppointments,
	getSingleAppointment,
	createAppointment,
	deleteAppointment,
};
