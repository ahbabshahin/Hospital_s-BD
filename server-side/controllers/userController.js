const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { createTokenUser, attachCookiesToResponse } = require('../utils');

const getAllUsers = async (req, res) => {
	const users = await User.find({}).select('-password');

	res.status(StatusCodes.OK).json({ users, count: users.length });
};

const getSingleUser = async (req, res) => {
	const { id } = req.params;
	const user = await User.findOne({ _id: id });

	if (!user) {
		throw new CustomError.NotFoundError(`No user with id ${id}`);
	}

	res.status(StatusCodes.OK).json({ user });
};

const showCurrentUser = async (req, res) => {
	res.status(StatusCodes.OK).json({ user: req.user });
};

const updateUser = async (req, res) => {
	const user = await User.findOneAndUpdate(
		{ _id: req.user.userId },
		req.body,
		{
			new: true,
			runValidators: true,
		}
	);

	const tokenUser = createTokenUser(user);
	attachCookiesToResponse({ res, user: tokenUser });

	res.status(StatusCodes.OK).json({ user: tokenUser });
};

const updateUserPassword = async (res, req) => {
	const { oldPassword, newPassword } = req.body;

	if (!oldPassword || !newPassword) {
		throw new CustomError.BadRequestError(`Please provide both value`);
	}

	const user = await User.findOne({ _id: req.user.userId });

	if (!isPasswordCorrect) {
		throw new CustomError.UnauthenticatedError('Invalid Credentials');
	}

	user.password = newPassword;

	await user.save();

	res.status(StatusCodes.OK).json({ msg: 'Password Updated' });
};

module.exports = {
	getAllUsers,
	getSingleUser,
	showCurrentUser,
	updateUser,
	updateUserPassword,
};
