const Appointment = require('../models/Appointments');
const DocInfo = require('../models/DoctorsInfo');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const getAllAppointments = async (req, res) => {
	const { hId } = req.params;
	const app = await Appointment.find({ hId });
	res.status(StatusCodes.OK).json({ app, count: app.length });
};

const getSingleAppointment = async (req, res) => {
	const { dId } = req.params;

	const app = await Appointment.find(
		{ dId },
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
	const { hId, dId } = req.params;
	const { name, address, schedule, age, contacts } = req.body;

	const verify = await DocInfo.findOne({ _id: dId, hId: hId });

	if (!verify) {
		throw new NotFoundError('Invalid Credentials');
	} else {
		const app = await Appointment.create({
			hId: hId,
			dId: dId,
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
	const { hId, dId } = req.params;

	const verify = await Appointment.findOne({ _id: dId, hId: hId });
	if (!verify) {
		throw new NotFoundError(`No appointment with id ${dId}`);
	}

	const app = await Appointment.findOneAndDelete({ _id: dId, hId: hId });

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
