const express = require('express');
const router = express.Router();

const {
	register,
	login,
	adminLogin,
	logout,
} = require('../controllers/authController');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/adminLogin').post(adminLogin);
router.route('/logout').get(logout);

module.exports = router;
